export type Category = "Frontend" | "Backend" | "DevOps & Tools" | "Practices";

type Skills = {
    category: Category;
    skills: string[];
}

export const skills: Skills[] = [
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
        skills: ["Docker", "Jenkins", "OpenShift", "Nx", "Dynatrace", "Splunk", "Graylog"]
    },
    {
        category: "Practices",
        skills: ["Agile (Scrum/Kanban)", "Leadership", "Mentorship", "Test Automation"]
    }
];