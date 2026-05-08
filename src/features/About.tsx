import { UserRound } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Heading } from "../components/Heading";

export function About() {
    return (
        <Section id="about">
            <SectionHeader>
                <UserRound className="stroke-primary size-5 lg:size-8" />
                <Heading size={2}>
                    <span className="uppercase">About</span>
                </Heading>
            </SectionHeader>
            <p>I specialize in React Typescript and Java Spring Boot with a strong focus on clean architecture, simplicity, performance, and both user and developer experience. I have delivered scalable, user-centric software across banking and public-sector domains.</p>
        </Section>
    )
}