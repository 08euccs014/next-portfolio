import { PROJECT_GRADIENTS } from "@/types/project";

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  employment_type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: string;
  gradient: string;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

export type Certification = {
  id: string;
  title: string;
  organization: string;
  year: string;
  expiry: string;
  description: string;
  skills: string[];
  icon: string;
  color: string;
  verified: boolean;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

export type JourneyStat = {
  id: string;
  label: string;
  value: string;
  icon: string;
  sort_order: number;
};

export const EMPLOYMENT_TYPES = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
] as const;

export const EXPERIENCE_ICON_NAMES = [
  "Brain",
  "Code",
  "Database",
  "Award",
  "Building",
  "Users",
  "Calendar",
  "Zap",
] as const;

export const CERT_COLORS = [
  "bg-[#FF9900]",
  "bg-[#4A4E8C]",
  "bg-[#EC4899]",
  "bg-[#06B6D4]",
  "bg-[#10B981]",
  "bg-[#6366F1]",
] as const;

export function emptyExperience(): Omit<Experience, "id"> {
  return {
    title: "",
    company: "",
    location: "",
    period: "",
    employment_type: "Full-time",
    description: "",
    achievements: [""],
    technologies: [],
    icon: "Code",
    gradient: PROJECT_GRADIENTS[2],
    published: true,
    sort_order: 0,
  };
}

export function emptyCertification(): Omit<Certification, "id"> {
  return {
    title: "",
    organization: "",
    year: "",
    expiry: "",
    description: "",
    skills: [],
    icon: "Award",
    color: CERT_COLORS[0],
    verified: true,
    published: true,
    sort_order: 0,
  };
}

export function emptyStat(): Omit<JourneyStat, "id"> {
  return {
    label: "",
    value: "",
    icon: "Calendar",
    sort_order: 0,
  };
}
