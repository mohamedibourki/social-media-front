import { LucideIcon } from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  // Simple implementation for social media icons
  return <span className={className}>@</span>;
}
