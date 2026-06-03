import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type AppLinkProps = {
  external?: boolean;
} & ComponentProps<"a">;

export function AppLink({ external, className, ...props }: AppLinkProps) {
  return (
    <Button asChild variant="link">
      <a
        className={cn('p-1', className)}
        rel={external ? "noopener noreferrer" : props.rel}
        target={external ? "_blank" : props.target}
        {...props}
      />
    </Button >
  );
}
