import {
  getAllCertificationsAdmin,
  getAllExperiencesAdmin,
  getAllStatsAdmin,
} from "@/lib/journey/queries";
import { JourneyTables } from "@/components/admin/journey-tables";

export const dynamic = "force-dynamic";

export default async function JourneyAdminPage() {
  const [experiences, certifications, stats] = await Promise.all([
    getAllExperiencesAdmin(),
    getAllCertificationsAdmin(),
    getAllStatsAdmin(),
  ]);

  return (
    <JourneyTables
      experiences={experiences}
      certifications={certifications}
      stats={stats}
    />
  );
}
