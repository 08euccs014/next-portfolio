import { StatForm } from "@/components/admin/stat-form";

export default function NewStatPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">New stat</h1>
      <StatForm />
    </div>
  );
}
