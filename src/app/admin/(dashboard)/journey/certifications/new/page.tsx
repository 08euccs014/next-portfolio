import { CertificationForm } from "@/components/admin/certification-form";

export default function NewCertificationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">New certification</h1>
      <CertificationForm />
    </div>
  );
}
