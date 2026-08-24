"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/lib/supabase/client";
import { toExperienceWrite } from "@/lib/journey/helpers";
import {
  EMPLOYMENT_TYPES,
  EXPERIENCE_ICON_NAMES,
  emptyExperience,
  type Experience,
} from "@/types/journey";
import { PROJECT_GRADIENTS } from "@/types/project";

type FormState = Omit<Experience, "id" | "created_at" | "updated_at">;

export function ExperienceForm({ experience }: { experience?: Experience }) {
  const router = useRouter();
  const initial = useMemo<FormState>(() => {
    if (!experience) return emptyExperience();
    const { id: _id, created_at: _c, updated_at: _u, ...rest } = experience;
    return rest;
  }, [experience]);
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const payload = toExperienceWrite(form);
      if (experience) {
        const { error: updateError } = await supabase
          .from("experiences")
          .update(payload)
          .eq("id", experience.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("experiences").insert(payload);
        if (insertError) throw insertError;
      }
      router.push("/admin/journey");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Role title">
          <Input value={form.title} onChange={(e) => update("title", e.target.value)} required />
        </Field>
        <Field label="Company">
          <Input value={form.company} onChange={(e) => update("company", e.target.value)} required />
        </Field>
        <Field label="Location">
          <Input value={form.location} onChange={(e) => update("location", e.target.value)} />
        </Field>
        <Field label="Period">
          <Input
            placeholder="2022 - Present"
            value={form.period}
            onChange={(e) => update("period", e.target.value)}
          />
        </Field>
        <Field label="Employment type">
          <select
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            value={form.employment_type}
            onChange={(e) => update("employment_type", e.target.value)}
          >
            {EMPLOYMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Sort order">
          <Input
            type="number"
            value={form.sort_order}
            onChange={(e) => update("sort_order", Number(e.target.value))}
          />
        </Field>
        <Field label="Icon">
          <select
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            value={form.icon}
            onChange={(e) => update("icon", e.target.value)}
          >
            {EXPERIENCE_ICON_NAMES.map((icon) => (
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
            onChange={(e) => update("gradient", e.target.value)}
          >
            {PROJECT_GRADIENTS.map((gradient) => (
              <option key={gradient} value={gradient}>
                {gradient}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Description">
        <Textarea
          rows={4}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />
      </Field>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Achievements</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => update("achievements", [...form.achievements, ""])}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>
        {form.achievements.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={item}
              onChange={(e) => {
                const next = [...form.achievements];
                next[index] = e.target.value;
                update("achievements", next);
              }}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() =>
                update(
                  "achievements",
                  form.achievements.filter((_, i) => i !== index)
                )
              }
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </section>

      <Field label="Technologies (comma-separated)">
        <Input
          value={form.technologies.join(", ")}
          onChange={(e) =>
            update(
              "technologies",
              e.target.value
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
            )
          }
        />
      </Field>

      <label className="flex items-center gap-2 text-sm">
        <Checkbox
          checked={form.published}
          onCheckedChange={(checked) => update("published", checked === true)}
        />
        Published
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex gap-3">
        <Button type="submit" className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" disabled={saving}>
          {saving ? "Saving…" : experience ? "Update role" : "Create role"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/journey")}>
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
