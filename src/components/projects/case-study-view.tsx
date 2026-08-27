import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScreenshotGallery } from "@/components/projects/screenshot-gallery";
import { getProjectIcon } from "@/lib/projects/icons";
import type { Project } from "@/types/project";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#EC4899]">
      {children}
    </p>
  );
}

export function CaseStudyView({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project | null;
  next: Project | null;
}) {
  const Icon = getProjectIcon(project.icon);
  const paragraphs = project.description
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <article className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#4A4E8C] pt-28 pb-16 text-white">
        <div
          className={`pointer-events-none absolute inset-0 opacity-40 bg-gradient-to-br ${project.gradient}`}
        />
        {project.cover_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cover_image_url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A4E8C] via-[#4A4E8C]/70 to-[#4A4E8C]/40" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All projects
          </Link>

          <div className="flex items-start gap-4">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:flex">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech_groups.flatMap((group) => group.items).map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="bg-white/15 text-white hover:bg-white/25"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { label: "Role", value: project.role },
            { label: "Timeline", value: project.timeline },
            { label: "Outcome", value: project.outcome },
          ].map((item) => (
            <div key={item.label}>
              <SectionLabel>{item.label}</SectionLabel>
              <p className="text-lg font-medium text-gray-900">
                {item.value || "—"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="max-w-3xl">
          <SectionLabel>The story</SectionLabel>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {project.screenshots.length > 0 && (
          <section className="mt-20">
            <SectionLabel>Product</SectionLabel>
            <h2 className="mb-10 text-3xl font-bold text-gray-900">Screenshots</h2>
            <ScreenshotGallery screenshots={project.screenshots} />
          </section>
        )}

        {project.tech_groups.length > 0 && (
          <section className="mt-20">
            <SectionLabel>Stack</SectionLabel>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Technologies</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.tech_groups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6"
                >
                  <h3 className="mb-4 font-semibold text-[#4A4E8C]">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(project.live_url || project.github_url) && (
          <section className="mt-16 flex flex-wrap gap-3">
            {project.live_url && (
              <Button className="bg-[#4A4E8C] hover:bg-[#3B3F7A]" asChild>
                <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live demo
                </Link>
              </Button>
            )}
            {project.github_url && (
              <Button variant="outline" asChild>
                <Link href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </Link>
              </Button>
            )}
          </section>
        )}

        <nav className="mt-20 flex flex-col gap-4 border-t border-gray-100 pt-10 sm:flex-row sm:justify-between">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-xl border border-gray-100 p-5 transition-colors hover:border-[#4A4E8C]/30"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500">Previous</p>
              <p className="mt-1 inline-flex items-center font-semibold text-gray-900 group-hover:text-[#4A4E8C]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {previous.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-xl border border-gray-100 p-5 text-right transition-colors hover:border-[#4A4E8C]/30 sm:ml-auto"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500">Next</p>
              <p className="mt-1 inline-flex items-center justify-end font-semibold text-gray-900 group-hover:text-[#4A4E8C]">
                {next.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
