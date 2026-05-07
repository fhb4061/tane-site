import type { PropsWithChildren } from "react"

type SectionProps = {
    id?: string;
} & PropsWithChildren;

export function Section({ children, id }: SectionProps) {
    return (
        <section className="p-3 w-full h-full" id={id}>
            {children}
        </section>
    )
}