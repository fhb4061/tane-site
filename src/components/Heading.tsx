import type { PropsWithChildren } from "react";

type HeadingProps = {
    level?: 1 | 2;
} & PropsWithChildren;

export function Heading({ children, level = 1 }: HeadingProps) {

    if (level === 1) {
        return (
            <h1 className="font-bold text-3xl lg:text-4xl">
                {children}
            </h1>
        )
    }

    return (
        <h2 className="text-xl lg:text-2xl font-semibold">
            {children}
        </h2>
    )
}
