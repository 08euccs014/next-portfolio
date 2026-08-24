"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/lib/supabase/client";
import { toCertificationWrite } from "@/lib/journey/helpers";
import {
  CERT_COLORS,
  EXPERIENCE_ICON_NAMES,
  emptyCertification,
  type Certification,
} from "@/types/journey";

type FormState = Omit<Certification, "id" | "created_at" | "updated_at">;

export function CertificationForm({ certification }: { certification?: Certification }) {
  const router = useRouter();
  const initial = useMemo<FormState>(() => {
    if (!certification) return emptyCertification();
    const { id: _id, created_at: _c, updated_at: _u, ...rest } = certification;
    return rest;
  }, [certification]);
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
      const payload = toCertificationWrite(form);
      if (certification) {
        const { error: updateError } = await supabase
          .from("certifications")
          .update(payload)
          .eq("id", certification.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("certifications").insert(payload);
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
        <Field label="Title">
          <Input value={form.title} onChange={(e) => update("title", e.target.value)} required />
        </Field>
        <Field label="Organization">
          <Input value={form.organization} onChange={(e) => update("organization", e.target.value)} />
        </Field>
        <Field label="Issued">
          <Input value={form.year} onChange={(e) => update("year", e.target.value)} />
        </Field>
        <Field label="Expires">
          <Input value={form.expiry} onChange={(e) => update("expiry", e.target.value)} />
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
        <Field label="Badge color">
          <select
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            value={form.color}
            onChange={(e) => update("color", e.target.value)}
          >
            {CERT_COLORS.map((color) => (
              <option key={color} value={color}>
                {color}
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
      </div>
      <Field label="Description">
        <Textarea
          rows={3}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />
      </Field>
      <Field label="Skills (comma-separated)">
        <Input
          value={form.skills.join(", ")}
          onChange={(e) =>
            update(
              "skills",
              e.target.value
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
            )
          }
        />
      </Field>
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={form.verified}
            onCheckedChange={(checked) => update("verified", checked === true)}
          />
          Verified
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={form.published}
            onCheckedChange={(checked) => update("published", checked === true)}
          />
          Published
        </label>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex gap-3">
        <Button type="submit" className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" disabled={saving}>
          {saving ? "Saving…" : certification ? "Update certification" : "Create certification"}
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
