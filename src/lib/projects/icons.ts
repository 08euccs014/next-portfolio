import {
  Award,
  Brain,
  Building,
  Calendar,
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Award,
  Brain,
  Building,
  Calendar,
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  Zap,
};

export function getProjectIcon(name: string): LucideIcon {
  return ICONS[name] ?? Code;
}
