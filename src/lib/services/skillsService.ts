type Skills = {
    category: string;
    skills: string[];
}

export const getSkills = (): Skills[] => {
    return [
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
}