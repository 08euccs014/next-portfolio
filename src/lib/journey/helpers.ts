import type { Certification, Experience, JourneyStat } from "@/types/journey";

export function toExperienceWrite(
  experience: Omit<Experience, "id" | "created_at" | "updated_at">
) {
  return {
    title: experience.title,
    company: experience.company,
    location: experience.location,
    period: experience.period,
    employment_type: experience.employment_type,
    description: experience.description,
    achievements: experience.achievements.filter((item) => item.trim()),
    technologies: experience.technologies.filter((item) => item.trim()),
    icon: experience.icon,
    gradient: experience.gradient,
    published: experience.published,
    sort_order: experience.sort_order,
  };
}

export function toCertificationWrite(
  certification: Omit<Certification, "id" | "created_at" | "updated_at">
) {
  return {
    title: certification.title,
    organization: certification.organization,
    year: certification.year,
    expiry: certification.expiry,
    description: certification.description,
    skills: certification.skills.filter((item) => item.trim()),
    icon: certification.icon,
    color: certification.color,
    verified: certification.verified,
    published: certification.published,
    sort_order: certification.sort_order,
  };
}

export function toStatWrite(stat: Omit<JourneyStat, "id">) {
  return {
    label: stat.label,
    value: stat.value,
    icon: stat.icon,
    sort_order: stat.sort_order,
  };
}
