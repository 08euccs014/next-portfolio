import { FALLBACK_PROJECTS } from "@/lib/projects/fallback";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createPublicClient } from "@/lib/supabase/public";
import { createClient } from "@/lib/supabase/server";
import type { Project, Screenshot, TechGroup, WorkflowStep } from "@/types/project";

export { slugify, toProjectWrite } from "@/lib/projects/helpers";

type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  description: string | null;
  category: string;
  icon: string | null;
  gradient: string | null;
  cover_image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  role: string | null;
  timeline: string | null;
  outcome: string | null;
  tech_groups: unknown;
  workflow: unknown;
  screenshots: unknown;
  featured: boolean;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

export function mapProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary ?? "",
    description: row.description ?? "",
    category: row.category,
    icon: row.icon ?? "Code",
    gradient: row.gradient ?? "from-[#6366F1] to-[#EC4899]",
    cover_image_url: row.cover_image_url,
    live_url: row.live_url,
    github_url: row.github_url,
    role: row.role,
    timeline: row.timeline,
    outcome: row.outcome,
    tech_groups: asArray<TechGroup>(row.tech_groups),
    workflow: asArray<WorkflowStep>(row.workflow),
    screenshots: asArray<Screenshot>(row.screenshots),
    featured: row.featured,
    published: row.published,
    sort_order: row.sort_order,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function sortProjects(projects: Project[]) {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.sort_order - b.sort_order;
  });
}

export async function getPublishedProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured()) {
    return sortProjects(FALLBACK_PROJECTS.filter((project) => project.published));
  }

  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("published", true)
      .order("featured", { ascending: false })
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("Failed to load published projects", error);
      return [];
    }

    return (data ?? []).map((row) => mapProject(row as ProjectRow));
  } catch (error) {
    console.error("Failed to load published projects", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isSupabaseConfigured()) {
    return (
      FALLBACK_PROJECTS.find((project) => project.slug === slug && project.published) ??
      null
    );
  }

  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (error) {
      console.error("Failed to load project", error);
      return null;
    }

    return data ? mapProject(data as ProjectRow) : null;
  } catch (error) {
    console.error("Failed to load project", error);
    return null;
  }
}

export async function getAllProjectsAdmin(): Promise<Project[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map((row) => mapProject(row as ProjectRow));
}

export async function getProjectByIdAdmin(id: string): Promise<Project | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ? mapProject(data as ProjectRow) : null;
}

export function getAdjacentProjects(current: Project, all: Project[]) {
  const index = all.findIndex((project) => project.slug === current.slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  };
}
