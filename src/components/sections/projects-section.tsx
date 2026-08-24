"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/types/project";
import { Zap } from "lucide-react";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  const featured = filtered.filter((project) => project.featured);
  const others = filtered.filter((project) => !project.featured);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.unobserve(card);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(card);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [activeFilter, filtered.length]);

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-slide-up-fade text-center">
          <Badge
            variant="outline"
            className="mb-4 border-[#4A4E8C] text-[#4A4E8C] transition-all duration-300 hover:scale-110 hover:shadow-md"
          >
            Portfolio
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Case studies across AI, Python, Node.js, and React — problem, workflow,
            stack, and screenshots for each build.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={category === activeFilter ? "default" : "outline"}
              className={
                category === activeFilter
                  ? "bg-[#4A4E8C] shadow-lg hover:bg-[#3B3F7A]"
                  : "hover:shadow-md"
              }
              onClick={() => {
                setActiveFilter(category);
                setVisibleCards(new Set());
              }}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {projects.length === 0 ? (
          <p className="py-16 text-center text-lg text-gray-500">
            Projects coming soon.
          </p>
        ) : (
          <>
            {featured.length > 0 && (
              <div className="mb-16 grid gap-8 lg:grid-cols-2">
                {featured.map((project, index) => (
                  <div
                    key={project.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                  >
                    <ProjectCard
                      project={project}
                      featured
                      isVisible={visibleCards.has(index)}
                      delayMs={index * 100}
                    />
                  </div>
                ))}
              </div>
            )}

            {others.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {others.map((project, index) => {
                  const cardIndex = featured.length + index;
                  return (
                    <div
                      key={project.id}
                      ref={(el) => {
                        cardRefs.current[cardIndex] = el;
                      }}
                    >
                      <ProjectCard
                        project={project}
                        isVisible={visibleCards.has(cardIndex)}
                        delayMs={index * 80}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">Browse all case studies</Link>
          </Button>
        </div>

        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-2xl border-0 bg-gradient-to-r from-[#4A4E8C] to-[#EC4899] text-white transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
            <CardContent className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Ready to build your next project?</h3>
              <p className="mb-6 text-white/90">
                14 years across AI, Python, Node.js, and React — from idea to production.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#4A4E8C] hover:bg-white/90"
                asChild
              >
                <Link href="#contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Start a project
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
