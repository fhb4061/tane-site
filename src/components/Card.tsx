import type { PropsWithChildren } from "react";

type CardProps = {
    id?: string;
} & PropsWithChildren;

export function Card({ children, id }: CardProps) {
    return (
        <div className="p-4 border border-primary rounded-3xl w-full" id={id}>
            {children}
        </div>
    );
}

export function CardHeader({ children }: PropsWithChildren) {
    return (
        <div className="pb-3">
            {children}
        </div>
    )
}

export function CardTitle({ children }: PropsWithChildren) {
    return (
        <div className="text-xl lg:text-2xl font-bold">
            {children}
        </div>
    )
}

export function CardDescription({ children }: PropsWithChildren) {
    return (
        <div className="text-faded-fg">
            {children}
        </div>
    )
}

export function CardContent({ children }: PropsWithChildren) {
    return (
        <div className="py-5">
            {children}
        </div>
    )
}