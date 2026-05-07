import { WrenchIcon } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

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
            <div className="space-y-4">
                <div className="flex gap-2 items-center">
                    <WrenchIcon className="size-5" />
                    <h3 className="text-xl font-semibold">Skills</h3>
                </div>

                <Card>
                    {skills.map((value) => (
                        <div id={value.category} className="grid grid-cols-[175px_1fr] py-5 border-b last:border-b-0">
                            <span className="min-w-2">{value.category}</span>
                            <span>{value.skills.join(", ")}</span>
                        </div>
                    ))}
                </Card>
            </div>
        </Section>
    )

}