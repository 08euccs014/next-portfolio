"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/client";
import { FALLBACK_PROJECTS } from "@/lib/projects/fallback";
import { toProjectWrite } from "@/lib/projects/helpers";
import type { Project } from "@/types/project";

export function ProjectsTable({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function remove(id: string) {
    if (!confirm("Delete this project?")) return;
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: deleteError } = await supabase.from("projects").delete().eq("id", id);
      if (deleteError) throw deleteError;
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusy(false);
    }
  }

  async function seed() {
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const rows = FALLBACK_PROJECTS.map((project) => {
        const { id: _id, created_at: _c, updated_at: _u, ...rest } = project;
        return toProjectWrite(rest);
      });
      const { error: insertError } = await supabase.from("projects").insert(rows);
      if (insertError) throw insertError;
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Seed failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <div className="flex gap-2">
          {projects.length === 0 && (
            <Button variant="outline" onClick={seed} disabled={busy}>
              Load starter projects
            </Button>
          )}
          <Button className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" asChild>
            <Link href="/admin/projects/new">New project</Link>
          </Button>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {projects.length === 0 ? (
        <p className="rounded-lg border border-dashed p-8 text-center text-gray-500">
          No projects yet. Create one or load the starter set.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b last:border-0">
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">{project.title}</p>
                    <p className="text-xs text-gray-500">{project.slug}</p>
                  </td>
                  <td className="px-4 py-3">{project.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {project.published ? (
                        <Badge>Published</Badge>
                      ) : (
                        <Badge variant="secondary">Draft</Badge>
                      )}
                      {project.featured && <Badge variant="outline">Featured</Badge>}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/projects/${project.id}`}>Edit</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600"
                      disabled={busy}
                      onClick={() => remove(project.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
