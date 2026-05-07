import { UserRound } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";

export function About() {
    return (
        <Section id="about">
            <SectionHeader>
                <UserRound size={30} className="stroke-primary" />
                <h2 className="text-2xl lg:text-3xl font-semibold">About</h2>
            </SectionHeader>
            <p>I specialize in React Typescript and Java Spring Boot with a strong focus on clean architecture, simplicity, performance, and both user and developer experience. I have delivered scalable, user-centric software across banking and public-sector domains.</p>
        </Section>
    )
}