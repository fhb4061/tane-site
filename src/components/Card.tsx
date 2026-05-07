import type { PropsWithChildren } from "react";

type CardProps = {
    id?: string;
} & PropsWithChildren;

export function Card({ children, id }: CardProps) {
    return (
        <div className="p-4 border rounded-3xl w-full" id={id}>
            {children}
        </div>
    );
}