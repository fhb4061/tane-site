import { UserRound } from "lucide-react";
import { Section } from "../components/Section";

export function About() {
    return (
        <Section id="about">
            <div className="space-y-4">
                <div className="flex gap-2 items-center">
                    <UserRound className="size-5" />
                    <h3 className="text-xl font-semibold">About</h3>
                </div>
                <p>Over the past 7+ years, I have delivered scalable, user-centric software across banking and public-sector domains. I specialize in React and Spring Boot with a strong focus on clean architecture, simplicity, performance, and both user and developer experience.</p>
            </div>
        </Section>
    )
}