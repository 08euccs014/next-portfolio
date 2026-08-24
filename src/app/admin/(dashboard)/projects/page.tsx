import { getAllProjectsAdmin } from "@/lib/projects/queries";
import { ProjectsTable } from "@/components/admin/projects-table";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await getAllProjectsAdmin();
  return <ProjectsTable projects={projects} />;
}
