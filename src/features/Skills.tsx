import { WrenchIcon } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
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
            <SectionHeader>
                <WrenchIcon size={30} />
                <h2 className="text-2xl lg:text-3xl font-semibold">Skills</h2>
            </SectionHeader>

            <Card>
                {skills.map((value) => (
                    <div id={value.category} className="grid grid-rows-2 lg:grid-cols-[170px_1fr] items-start py-5 border-b last:border-b-0">
                        <span className="tracking-wide font-bold uppercase">{value.category}</span>
                        <span className="leading-relaxed">{value.skills.join(", ")}</span>
                    </div>
                ))}
            </Card>
        </Section >
    )

}