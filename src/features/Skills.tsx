import { WrenchIcon } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Card, CardContent } from "../components/Card";
import { Heading } from "../components/Heading";

type Skills = {
    category: string;
    skills: string[];
}

const skills: Skills[] = [
    {
        category: "Frontend",
        skills: ["React", "Redux Toolkit", "Tailwind CSS", "UI/UX Design", "Micro-frontend"]
    },
    {
        category: "Backend",
        skills: ["Spring Boot Java", "GraphQL", "Kafka", "Microservices"]
    },
    {
        category: "DevOps & Tools",
        skills: ["Docker", "Jenkins", "OpenShift", "Nx mono-repo", "Dynatrace", "Splunk", "Graylog"]
    },
    {
        category: "Practices",
        skills: ["Agile (Scrum/Kanban)", "Leadership", "Mentorship", "Test Automation"]
    }
];

export function Skills() {
    return (
        <Section id="skills">
            <SectionHeader>
                <WrenchIcon className="stroke-primary size-5 lg:size-8" />
                <Heading size={2}>
                    <span className="uppercase">Skills</span>
                </Heading>
            </SectionHeader>
            <Card>
                <CardContent>
                    <div className="space-y-2 lg:space-y-5">
                        {skills.map((value) => (
                            <div id={value.category} className="grid grid-rows-2 pb-4 border-b border-primary lg:grid-cols-[170px_1fr] lg:pb-0 last:border-b-0">
                                <span className="tracking-wide font-bold">{value.category}</span>
                                <span className="leading-relaxed">{value.skills.join(", ")}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Section >
    )

}