import { Shield, ScanFace, Brain, Activity, HardHat, Cpu, Satellite, type LucideIcon } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Shield,
  ScanFace,
  Brain,
  Activity,
  HardHat,
  Cpu,
  Satellite,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Shield;
}
