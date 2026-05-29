import type { PropsWithChildren } from "react";

type HeadingProps = {
    level?: 1 | 2 | 3;
    size?: "page" | "section" | "card";
} & PropsWithChildren;

export function Heading({ children, level = 1, size }: HeadingProps) {
    const resolvedSize = size ?? (level === 1 ? "page" : level === 2 ? "section" : "card");

    if (level === 1) {
        return (
            <h1 className="font-bold text-3xl lg:text-4xl">
                {children}
            </h1>
        )
    }

    if (level === 2) {
        return (
            <h2 className="text-xl lg:text-2xl font-semibold">
                {children}
            </h2>
        )
    }

    return (
        <h3 className={resolvedSize === "card" ? "text-lg lg:text-xl font-bold" : "text-lg lg:text-xl font-bold"}>
            {children}
        </h3>
    )
}
