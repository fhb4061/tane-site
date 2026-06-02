import type { ComponentProps } from "react";

type AppLinkProps = {
  external?: boolean;
} & ComponentProps<"a">;

export function AppLink({ external, className, ...props }: AppLinkProps) {
  return (
    <a
      className={`p-1 underline underline-offset-4 hover:text-foreground-hover outline-0 focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      rel={external ? "noopener noreferrer" : props.rel}
      target={external ? "_blank" : props.target}
      {...props}
    />
  );
}
