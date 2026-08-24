import { notFound } from "next/navigation";
import { CertificationForm } from "@/components/admin/certification-form";
import { getCertificationByIdAdmin } from "@/lib/journey/queries";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditCertificationPage({ params }: PageProps) {
  const { id } = await params;
  const certification = await getCertificationByIdAdmin(id);
  if (!certification) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Edit certification</h1>
      <CertificationForm certification={certification} />
    </div>
  );
}
