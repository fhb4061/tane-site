import type { ComponentType, SVGProps } from "react";

type SectionIconProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
};

export function SectionIcon({ icon: Icon, className = "stroke-primary size-5 lg:size-8" }: SectionIconProps) {
  return <Icon className={className} aria-hidden="true" />;
}
