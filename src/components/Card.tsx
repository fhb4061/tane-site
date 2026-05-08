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
        <div className="lg:pb-3">
            {children}
        </div>
    )
}

export function CardTitle({ children }: PropsWithChildren) {
    return (
        <div className="text-lg lg:text-xl font-bold">
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
        <div className="py-3 lg:py-5">
            {children}
        </div>
    )
}