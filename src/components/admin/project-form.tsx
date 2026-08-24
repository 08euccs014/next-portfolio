"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/lib/supabase/client";
import { slugify, toProjectWrite } from "@/lib/projects/helpers";
import {
  PROJECT_CATEGORIES,
  PROJECT_GRADIENTS,
  PROJECT_ICON_NAMES,
  emptyProject,
  type Project,
  type Screenshot,
} from "@/types/project";

const BUCKET = "project-media";

type FormState = Omit<Project, "id" | "created_at" | "updated_at">;

export function ProjectForm({ project }: { project?: Project }) {
  const router = useRouter();
  const initial = useMemo<FormState>(() => {
    if (!project) return emptyProject();
    const { id: _id, created_at: _c, updated_at: _u, ...rest } = project;
    return rest;
  }, [project]);

  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function uploadFile(file: File) {
    const supabase = createClient();
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${form.slug || "draft"}/${Date.now()}-${crypto.randomUUID()}.${ext}`;
    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    return data.publicUrl;
  }

  async function onCoverChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadFile(file);
      update("cover_image_url", url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Cover upload failed");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  async function onScreenshotsChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;
    setUploading(true);
    setError(null);
    try {
      const uploaded: Screenshot[] = [];
      for (const file of files) {
        const url = await uploadFile(file);
        uploaded.push({ url, caption: file.name.replace(/\.[^.]+$/, "") });
      }
      update("screenshots", [...form.screenshots, ...uploaded]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Screenshot upload failed");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    if (!form.title.trim() || !form.slug.trim()) {
      setError("Title and slug are required.");
      return;
    }
    setSaving(true);
    try {
      const supabase = createClient();
      const payload = toProjectWrite({
        ...form,
        slug: slugify(form.slug),
        tech_groups: form.tech_groups.filter((group) => group.label.trim() && group.items.length > 0),
        workflow: form.workflow.filter((step) => step.title.trim()),
      });

      if (project) {
        const { error: updateError } = await supabase
          .from("projects")
          .update(payload)
          .eq("id", project.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("projects").insert(payload);
        if (insertError) throw insertError;
      }

      router.push("/admin/projects");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2">
        <Field label="Title">
          <Input
            value={form.title}
            onChange={(event) => {
              const title = event.target.value;
              setForm((current) => ({
                ...current,
                title,
                slug: project ? current.slug : slugify(title),
              }));
            }}
            required
          />
        </Field>
        <Field label="Slug">
          <Input
            value={form.slug}
            onChange={(event) => update("slug", slugify(event.target.value))}
            required
          />
        </Field>
        <Field label="Category">
          <select
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            value={form.category}
            onChange={(event) => update("category", event.target.value)}
          >
            {PROJECT_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Icon">
          <select
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            value={form.icon}
            onChange={(event) => update("icon", event.target.value)}
          >
            {PROJECT_ICON_NAMES.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Gradient">
          <select
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            value={form.gradient}
            onChange={(event) => update("gradient", event.target.value)}
          >
            {PROJECT_GRADIENTS.map((gradient) => (
              <option key={gradient} value={gradient}>
                {gradient}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Sort order">
          <Input
            type="number"
            value={form.sort_order}
            onChange={(event) => update("sort_order", Number(event.target.value))}
          />
        </Field>
        <Field label="Live URL">
          <Input
            value={form.live_url ?? ""}
            onChange={(event) => update("live_url", event.target.value)}
          />
        </Field>
        <Field label="GitHub URL">
          <Input
            value={form.github_url ?? ""}
            onChange={(event) => update("github_url", event.target.value)}
          />
        </Field>
        <Field label="Role">
          <Input
            value={form.role ?? ""}
            onChange={(event) => update("role", event.target.value)}
          />
        </Field>
        <Field label="Timeline">
          <Input
            value={form.timeline ?? ""}
            onChange={(event) => update("timeline", event.target.value)}
          />
        </Field>
      </section>

      <Field label="Summary">
        <Textarea
          value={form.summary}
          onChange={(event) => update("summary", event.target.value)}
          rows={3}
        />
      </Field>
      <Field label="Outcome">
        <Textarea
          value={form.outcome ?? ""}
          onChange={(event) => update("outcome", event.target.value)}
          rows={2}
        />
      </Field>
      <Field label="Story">
        <Textarea
          value={form.description}
          onChange={(event) => update("description", event.target.value)}
          rows={8}
        />
      </Field>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={form.featured}
            onCheckedChange={(checked) => update("featured", checked === true)}
          />
          Featured
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={form.published}
            onCheckedChange={(checked) => update("published", checked === true)}
          />
          Published
        </label>
      </div>

      <section className="space-y-3">
        <Label>Cover image</Label>
        {form.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={form.cover_image_url}
            alt="Cover"
            className="h-40 w-full max-w-xl rounded-lg object-cover"
          />
        )}
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-[#4A4E8C]">
          <Upload className="h-4 w-4" />
          {uploading ? "Uploading…" : "Upload cover"}
          <input type="file" accept="image/*" className="hidden" onChange={onCoverChange} />
        </label>
      </section>

      <Repeatable
        title="Tech groups"
        onAdd={() =>
          update("tech_groups", [...form.tech_groups, { label: "", items: [] }])
        }
      >
        {form.tech_groups.map((group, index) => (
          <div key={index} className="grid gap-3 rounded-lg border p-4 md:grid-cols-[180px_1fr_auto]">
            <Input
              placeholder="Group label"
              value={group.label}
              onChange={(event) => {
                const next = [...form.tech_groups];
                next[index] = { ...group, label: event.target.value };
                update("tech_groups", next);
              }}
            />
            <Input
              placeholder="Comma-separated items"
              value={group.items.join(", ")}
              onChange={(event) => {
                const next = [...form.tech_groups];
                next[index] = {
                  ...group,
                  items: event.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean),
                };
                update("tech_groups", next);
              }}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() =>
                update(
                  "tech_groups",
                  form.tech_groups.filter((_, i) => i !== index)
                )
              }
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </Repeatable>

      <Repeatable
        title="Workflow"
        onAdd={() =>
          update("workflow", [...form.workflow, { title: "", description: "" }])
        }
      >
        {form.workflow.map((step, index) => (
          <div key={index} className="space-y-3 rounded-lg border p-4">
            <div className="flex gap-3">
              <Input
                placeholder={`Step ${index + 1} title`}
                value={step.title}
                onChange={(event) => {
                  const next = [...form.workflow];
                  next[index] = { ...step, title: event.target.value };
                  update("workflow", next);
                }}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() =>
                  update(
                    "workflow",
                    form.workflow.filter((_, i) => i !== index)
                  )
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              placeholder="What happened in this step"
              value={step.description}
              onChange={(event) => {
                const next = [...form.workflow];
                next[index] = { ...step, description: event.target.value };
                update("workflow", next);
              }}
            />
          </div>
        ))}
      </Repeatable>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Screenshots</Label>
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-[#4A4E8C]">
            <Plus className="h-4 w-4" />
            Add images
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={onScreenshotsChange}
            />
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {form.screenshots.map((shot, index) => (
            <div key={`${shot.url}-${index}`} className="rounded-lg border p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.url} alt="" className="mb-3 h-36 w-full rounded object-cover" />
              <div className="flex gap-2">
                <Input
                  placeholder="Caption"
                  value={shot.caption}
                  onChange={(event) => {
                    const next = [...form.screenshots];
                    next[index] = { ...shot, caption: event.target.value };
                    update("screenshots", next);
                  }}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    update(
                      "screenshots",
                      form.screenshots.filter((_, i) => i !== index)
                    )
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" disabled={saving || uploading}>
          {saving ? "Saving…" : project ? "Update project" : "Create project"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/projects")}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function Repeatable({
  title,
  onAdd,
  children,
}: {
  title: string;
  onAdd: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>{title}</Label>
        <Button type="button" variant="outline" size="sm" onClick={onAdd}>
          <Plus className="mr-1 h-4 w-4" />
          Add
        </Button>
      </div>
      {children}
    </section>
  );
}
