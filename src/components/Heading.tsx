import type { PropsWithChildren } from "react";

type HeadingProps = {
    size?: 1 | 2;
} & PropsWithChildren;

export function Heading({ children, size = 1 }: HeadingProps) {
    if (size === 1) {
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