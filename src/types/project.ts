export type TechGroup = {
  label: string;
  items: string[];
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type Screenshot = {
  url: string;
  caption: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  icon: string;
  gradient: string;
  cover_image_url: string | null;
  live_url: string | null;
  github_url: string | null;
  role: string | null;
  timeline: string | null;
  outcome: string | null;
  tech_groups: TechGroup[];
  workflow: WorkflowStep[];
  screenshots: Screenshot[];
  featured: boolean;
  published: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
};

export const PROJECT_CATEGORIES = [
  "AI/ML",
  "Mobile",
  "Web App",
  "Architecture",
  "Data Science",
  "ML Infrastructure",
  "Developer Tools",
] as const;

export const PROJECT_ICON_NAMES = [
  "Brain",
  "Smartphone",
  "Globe",
  "Zap",
  "Database",
  "Code",
] as const;

export const PROJECT_GRADIENTS = [
  "from-[#EC4899] to-[#F97316]",
  "from-[#06B6D4] to-[#8B5CF6]",
  "from-[#6366F1] to-[#EC4899]",
  "from-[#FCD34D] to-[#F97316]",
  "from-[#8B5CF6] to-[#EC4899]",
  "from-[#10B981] to-[#3B82F6]",
  "from-[#F59E0B] to-[#EF4444]",
  "from-[#8B5CF6] to-[#06B6D4]",
  "from-[#F97316] to-[#EC4899]",
] as const;

export function emptyProject(): Omit<Project, "id"> {
  return {
    slug: "",
    title: "",
    summary: "",
    description: "",
    category: "Web App",
    icon: "Code",
    gradient: PROJECT_GRADIENTS[2],
    cover_image_url: null,
    live_url: "",
    github_url: "",
    role: "",
    timeline: "",
    outcome: "",
    tech_groups: [{ label: "Stack", items: [] }],
    workflow: [{ title: "", description: "" }],
    screenshots: [],
    featured: false,
    published: false,
    sort_order: 0,
  };
}
