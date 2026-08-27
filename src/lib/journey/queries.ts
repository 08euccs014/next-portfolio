import {
  FALLBACK_CERTIFICATIONS,
  FALLBACK_EXPERIENCES,
  FALLBACK_STATS,
} from "@/lib/journey/fallback";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createPublicClient } from "@/lib/supabase/public";
import { createClient } from "@/lib/supabase/server";
import type { Certification, Experience, JourneyStat } from "@/types/journey";

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

type ExperienceRow = {
  id: string;
  title: string;
  company: string;
  location: string | null;
  period: string | null;
  employment_type: string | null;
  description: string | null;
  achievements: unknown;
  technologies: unknown;
  icon: string | null;
  gradient: string | null;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

type CertificationRow = {
  id: string;
  title: string;
  organization: string;
  year: string | null;
  expiry: string | null;
  description: string | null;
  skills: unknown;
  icon: string | null;
  color: string | null;
  verified: boolean;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

type StatRow = {
  id: string;
  label: string;
  value: string;
  icon: string | null;
  sort_order: number;
};

function mapExperience(row: ExperienceRow): Experience {
  return {
    id: row.id,
    title: row.title,
    company: row.company,
    location: row.location ?? "",
    period: row.period ?? "",
    employment_type: row.employment_type ?? "Full-time",
    description: row.description ?? "",
    achievements: asArray<string>(row.achievements),
    technologies: asArray<string>(row.technologies),
    icon: row.icon ?? "Code",
    gradient: row.gradient ?? "from-[#4A4E8C] to-[#6366F1]",
    published: row.published,
    sort_order: row.sort_order,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function mapCertification(row: CertificationRow): Certification {
  return {
    id: row.id,
    title: row.title,
    organization: row.organization,
    year: row.year ?? "",
    expiry: row.expiry ?? "",
    description: row.description ?? "",
    skills: asArray<string>(row.skills),
    icon: row.icon ?? "Award",
    color: row.color ?? "bg-[#FF9900]",
    verified: row.verified,
    published: row.published,
    sort_order: row.sort_order,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function mapStat(row: StatRow): JourneyStat {
  return {
    id: row.id,
    label: row.label,
    value: row.value,
    icon: row.icon ?? "Calendar",
    sort_order: row.sort_order,
  };
}

export async function getPublishedJourney() {
  if (!isSupabaseConfigured()) {
    return {
      experiences: FALLBACK_EXPERIENCES,
      certifications: FALLBACK_CERTIFICATIONS,
      stats: FALLBACK_STATS,
    };
  }

  try {
    const supabase = createPublicClient();
    const [experiencesRes, certsRes, statsRes] = await Promise.all([
      supabase
        .from("experiences")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true }),
      supabase
        .from("certifications")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true }),
      supabase.from("journey_stats").select("*").order("sort_order", { ascending: true }),
    ]);

    if (experiencesRes.error || certsRes.error || statsRes.error) {
      console.error("Failed to load journey", experiencesRes.error ?? certsRes.error ?? statsRes.error);
      return {
        experiences: FALLBACK_EXPERIENCES,
        certifications: FALLBACK_CERTIFICATIONS,
        stats: FALLBACK_STATS,
      };
    }

    return {
      experiences: (experiencesRes.data ?? []).map((row) => mapExperience(row as ExperienceRow)),
      certifications: (certsRes.data ?? []).map((row) => mapCertification(row as CertificationRow)),
      stats: (statsRes.data ?? []).map((row) => mapStat(row as StatRow)),
    };
  } catch (error) {
    console.error("Failed to load journey", error);
    return {
      experiences: FALLBACK_EXPERIENCES,
      certifications: FALLBACK_CERTIFICATIONS,
      stats: FALLBACK_STATS,
    };
  }
}

export async function getAllExperiencesAdmin(): Promise<Experience[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => mapExperience(row as ExperienceRow));
}

export async function getExperienceByIdAdmin(id: string): Promise<Experience | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? mapExperience(data as ExperienceRow) : null;
}

export async function getAllCertificationsAdmin(): Promise<Certification[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("certifications")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => mapCertification(row as CertificationRow));
}

export async function getCertificationByIdAdmin(id: string): Promise<Certification | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("certifications")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? mapCertification(data as CertificationRow) : null;
}

export async function getAllStatsAdmin(): Promise<JourneyStat[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("journey_stats")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => mapStat(row as StatRow));
}

export async function getStatByIdAdmin(id: string): Promise<JourneyStat | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("journey_stats")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? mapStat(data as StatRow) : null;
}
