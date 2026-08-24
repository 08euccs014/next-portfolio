"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";
import {
  FALLBACK_CERTIFICATIONS,
  FALLBACK_EXPERIENCES,
  FALLBACK_STATS,
} from "@/lib/journey/fallback";
import {
  toCertificationWrite,
  toExperienceWrite,
  toStatWrite,
} from "@/lib/journey/helpers";
import type { Certification, Experience, JourneyStat } from "@/types/journey";

export function JourneyTables({
  experiences,
  certifications,
  stats,
}: {
  experiences: Experience[];
  certifications: Certification[];
  stats: JourneyStat[];
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function remove(table: "experiences" | "certifications" | "journey_stats", id: string) {
    if (!confirm("Delete this item?")) return;
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: deleteError } = await supabase.from(table).delete().eq("id", id);
      if (deleteError) throw deleteError;
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusy(false);
    }
  }

  async function replaceRoles() {
    if (
      experiences.length > 0 &&
      !confirm("Replace all existing roles with the four resume roles?")
    ) {
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const experienceRows = FALLBACK_EXPERIENCES.map(
        ({ id: _id, created_at: _c, updated_at: _u, ...rest }) => toExperienceWrite(rest)
      );
      const { error: deleteError } = await supabase
        .from("experiences")
        .delete()
        .not("id", "is", null);
      if (deleteError) throw deleteError;
      const { error: insertError } = await supabase.from("experiences").insert(experienceRows);
      if (insertError) throw insertError;
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Replace failed");
    } finally {
      setBusy(false);
    }
  }

  async function seed() {
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const experienceRows = FALLBACK_EXPERIENCES.map(({ id: _id, created_at: _c, updated_at: _u, ...rest }) =>
        toExperienceWrite(rest)
      );
      const certRows = FALLBACK_CERTIFICATIONS.map(({ id: _id, created_at: _c, updated_at: _u, ...rest }) =>
        toCertificationWrite(rest)
      );
      const statRows = FALLBACK_STATS.map(({ id: _id, ...rest }) => toStatWrite(rest));
      const inserts = await Promise.all([
        experiences.length === 0
          ? supabase.from("experiences").insert(experienceRows)
          : Promise.resolve({ error: null }),
        certifications.length === 0
          ? supabase.from("certifications").insert(certRows)
          : Promise.resolve({ error: null }),
        stats.length === 0
          ? supabase.from("journey_stats").insert(statRows)
          : Promise.resolve({ error: null }),
      ]);
      const failed = inserts.find((result) => result.error);
      if (failed?.error) throw failed.error;
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Seed failed");
    } finally {
      setBusy(false);
    }
  }

  const empty = experiences.length === 0 && certifications.length === 0 && stats.length === 0;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Professional journey</h1>
          <p className="text-sm text-gray-500">Roles, stats, and certifications on the homepage.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={replaceRoles} disabled={busy}>
            Replace roles from resume
          </Button>
          {empty && (
            <Button variant="outline" onClick={seed} disabled={busy}>
              Load starter journey
            </Button>
          )}
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Section
        title="Stats"
        actionHref="/admin/journey/stats/new"
        actionLabel="New stat"
      >
        <SimpleTable
          empty="No stats yet."
          rows={stats.map((stat) => ({
            id: stat.id,
            title: stat.value,
            subtitle: stat.label,
            href: `/admin/journey/stats/${stat.id}`,
            onDelete: () => remove("journey_stats", stat.id),
            busy,
          }))}
        />
      </Section>

      <Section
        title="Roles"
        actionHref="/admin/journey/new"
        actionLabel="New role"
      >
        <SimpleTable
          empty="No roles yet."
          rows={experiences.map((item) => ({
            id: item.id,
            title: item.title,
            subtitle: [item.company, item.period].filter(Boolean).join(" · "),
            badge: item.published ? "Published" : "Draft",
            href: `/admin/journey/${item.id}`,
            onDelete: () => remove("experiences", item.id),
            busy,
          }))}
        />
      </Section>

      <Section
        title="Certifications"
        actionHref="/admin/journey/certifications/new"
        actionLabel="New certification"
      >
        <SimpleTable
          empty="No certifications yet."
          rows={certifications.map((item) => ({
            id: item.id,
            title: item.title,
            subtitle: item.organization,
            badge: item.published ? "Published" : "Draft",
            href: `/admin/journey/certifications/${item.id}`,
            onDelete: () => remove("certifications", item.id),
            busy,
          }))}
        />
      </Section>
    </div>
  );
}

function Section({
  title,
  actionHref,
  actionLabel,
  children,
}: {
  title: string;
  actionHref: string;
  actionLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <Button className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" size="sm" asChild>
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      </div>
      {children}
    </section>
  );
}

function SimpleTable({
  empty,
  rows,
}: {
  empty: string;
  rows: Array<{
    id: string;
    title: string;
    subtitle: string;
    badge?: string;
    href: string;
    onDelete: () => void;
    busy: boolean;
  }>;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-lg border border-dashed p-6 text-sm text-gray-500">{empty}</p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b last:border-0">
              <td className="px-4 py-3">
                <p className="font-medium text-gray-900">{row.title}</p>
                <p className="text-xs text-gray-500">{row.subtitle}</p>
              </td>
              <td className="px-4 py-3">
                {row.badge && (
                  <Badge variant={row.badge === "Published" ? "default" : "secondary"}>
                    {row.badge}
                  </Badge>
                )}
              </td>
              <td className="px-4 py-3 text-right">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={row.href}>Edit</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600"
                  disabled={row.busy}
                  onClick={row.onDelete}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
