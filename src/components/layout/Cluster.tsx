import type { PropsWithChildren } from "react";

type ClusterProps = {
  className?: string;
} & PropsWithChildren;

export function Cluster({ children, className = "flex gap-2 items-center" }: ClusterProps) {
  return <div className={className}>{children}</div>;
}
