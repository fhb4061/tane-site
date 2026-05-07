import type { PropsWithChildren } from "react"

type SectionProps = {
    id?: string;
} & PropsWithChildren;

export function Section({ children, id }: SectionProps) {
    return (
        <section className="p-3 w-full" id={id}>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    )
}

export function SectionHeader({ children }: PropsWithChildren) {
    return (
        <div className="flex gap-2 items-center">
            {children}
        </div>
    )
}