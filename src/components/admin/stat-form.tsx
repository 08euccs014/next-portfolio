"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { toStatWrite } from "@/lib/journey/helpers";
import { EXPERIENCE_ICON_NAMES, emptyStat, type JourneyStat } from "@/types/journey";

type FormState = Omit<JourneyStat, "id">;

export function StatForm({ stat }: { stat?: JourneyStat }) {
  const router = useRouter();
  const initial = useMemo<FormState>(() => {
    if (!stat) return emptyStat();
    const { id: _id, ...rest } = stat;
    return rest;
  }, [stat]);
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.label.trim() || !form.value.trim()) {
      setError("Label and value are required.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const payload = toStatWrite(form);
      if (stat) {
        const { error: updateError } = await supabase
          .from("journey_stats")
          .update(payload)
          .eq("id", stat.id);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("journey_stats").insert(payload);
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
    <form onSubmit={onSubmit} className="max-w-xl space-y-6">
      <div className="space-y-2">
        <Label>Label</Label>
        <Input
          value={form.label}
          onChange={(e) => setForm((current) => ({ ...current, label: e.target.value }))}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Value</Label>
        <Input
          value={form.value}
          onChange={(e) => setForm((current) => ({ ...current, value: e.target.value }))}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Icon</Label>
        <select
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          value={form.icon}
          onChange={(e) => setForm((current) => ({ ...current, icon: e.target.value }))}
        >
          {EXPERIENCE_ICON_NAMES.map((icon) => (
            <option key={icon} value={icon}>
              {icon}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label>Sort order</Label>
        <Input
          type="number"
          value={form.sort_order}
          onChange={(e) =>
            setForm((current) => ({ ...current, sort_order: Number(e.target.value) }))
          }
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex gap-3">
        <Button type="submit" className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" disabled={saving}>
          {saving ? "Saving…" : stat ? "Update stat" : "Create stat"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin/journey")}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
