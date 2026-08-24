import { notFound } from "next/navigation";
import { ExperienceForm } from "@/components/admin/experience-form";
import { getExperienceByIdAdmin } from "@/lib/journey/queries";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditExperiencePage({ params }: PageProps) {
  const { id } = await params;
  const experience = await getExperienceByIdAdmin(id);
  if (!experience) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Edit role</h1>
      <ExperienceForm experience={experience} />
    </div>
  );
}
