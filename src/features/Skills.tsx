import { WrenchIcon } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Card, CardContent } from "../components/Card";
import { Heading } from "../components/Heading";
import { SectionIcon } from "../components/Icon";
import { DetailList } from "../components/DetailList";

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
                <SectionIcon icon={WrenchIcon} />
                <Heading level={2}>
                    <span className="uppercase">Skills</span>
                </Heading>
            </SectionHeader>
            <Card>
                <CardContent>
                    <div className="space-y-2 lg:space-y-5">
                        <DetailList items={skills.map((value) => ({ term: value.category, description: value.skills.join(", ") }))} />
                    </div>
                </CardContent>
            </Card>
        </Section >
    )

}