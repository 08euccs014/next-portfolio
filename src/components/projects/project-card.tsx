"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectIcon } from "@/lib/projects/icons";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  isVisible?: boolean;
  delayMs?: number;
};

export function ProjectCard({
  project,
  featured = false,
  isVisible = true,
  delayMs = 0,
}: ProjectCardProps) {
  const Icon = getProjectIcon(project.icon);
  const techs = project.tech_groups.flatMap((group) => group.items);
  const visibleTechs = featured ? techs : techs.slice(0, 3);

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card
        className={`
          group h-full overflow-hidden border-0 shadow-lg py-0 gap-0
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
        `}
        style={{ transitionDelay: `${delayMs}ms` }}
      >
        <div className="relative overflow-hidden">
          {project.cover_image_url ? (
            <div className="relative h-44 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover_image_url}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div
              className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
            >
              <Icon className="w-12 h-12 text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge className="bg-white/90 text-gray-900 hover:bg-white">
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader className={featured ? "px-6 pt-6" : "px-6 pt-4 pb-2"}>
          <CardTitle
            className={`${featured ? "text-2xl" : "text-lg"} text-gray-900 group-hover:text-[#4A4E8C] transition-colors duration-300`}
          >
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className={`space-y-4 ${featured ? "px-6 pb-6" : "px-6 pb-5 space-y-3"}`}>
          <p
            className={`${featured ? "" : "text-sm line-clamp-3"} text-gray-600 leading-relaxed`}
          >
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {visibleTechs.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {!featured && techs.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{techs.length - 3}
              </Badge>
            )}
          </div>

          <span className="inline-flex items-center text-sm font-medium text-[#4A4E8C]">
            View case study
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
