import { notFound } from "next/navigation";
import { StatForm } from "@/components/admin/stat-form";
import { getStatByIdAdmin } from "@/lib/journey/queries";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditStatPage({ params }: PageProps) {
  const { id } = await params;
  const stat = await getStatByIdAdmin(id);
  if (!stat) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Edit stat</h1>
      <StatForm stat={stat} />
    </div>
  );
}
