import type { Project } from "@/types/project";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toProjectWrite(
  project: Omit<Project, "id" | "created_at" | "updated_at">
) {
  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary,
    description: project.description,
    category: project.category,
    icon: project.icon,
    gradient: project.gradient,
    cover_image_url: project.cover_image_url || null,
    live_url: project.live_url || null,
    github_url: project.github_url || null,
    role: project.role || null,
    timeline: project.timeline || null,
    outcome: project.outcome || null,
    tech_groups: project.tech_groups,
    workflow: project.workflow,
    screenshots: project.screenshots,
    featured: project.featured,
    published: project.published,
    sort_order: project.sort_order,
  };
}
