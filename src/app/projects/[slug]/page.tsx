import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CaseStudyView } from "@/components/projects/case-study-view";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getPublishedProjects,
} from "@/lib/projects/queries";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getPublishedProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project | Mohit Agrawal" };
  return {
    title: `${project.title} | Mohit Agrawal`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const all = await getPublishedProjects();
  const { previous, next } = getAdjacentProjects(project, all);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CaseStudyView project={project} previous={previous} next={next} />
      </main>
      <Footer />
    </div>
  );
}
