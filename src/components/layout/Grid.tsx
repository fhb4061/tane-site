import type { ElementType, PropsWithChildren } from "react";

type GridProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & PropsWithChildren;

export function Grid<T extends ElementType = "div">({ as, children, className = "grid gap-5" }: GridProps<T>) {
  const Component = as ?? "div";
  return <Component className={className}>{children}</Component>;
}
