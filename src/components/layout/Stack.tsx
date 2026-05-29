import type { PropsWithChildren } from "react";

type StackProps = {
  className?: string;
} & PropsWithChildren;

export function Stack({ children, className = "space-y-4" }: StackProps) {
  return <div className={className}>{children}</div>;
}
