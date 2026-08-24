import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectsSection } from "@/components/sections/projects-section";
import { getPublishedProjects } from "@/lib/projects/queries";

export const revalidate = 60;

export const metadata = {
  title: "Projects | Mohit Agrawal",
  description: "Case studies across AI, full-stack, and mobile work.",
};

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-8">
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
