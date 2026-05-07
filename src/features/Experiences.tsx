import { BriefcaseBusiness } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

type ExperienceItem = {
    role: string;
    company: string;
    period: string;
    bullets: string[];
};

// usually get this from api maybe but will leave it here for simplicity
const experiences: ExperienceItem[] = [
    {
        role: "Senior Developer",
        company: "New Zealand Police",
        period: "Nov 2023 - Feb 2026",
        bullets: [
            "Led development of photo sharing feature used by officers and photographers; streamline case building procedures.",
            "Delivered features improving visibility of critical operational data, including bail status, task assignment, and officer location context.",
            "Migrated legacy frontends into an Nx-managed React (TypeScript) monorepo to improve maintainability and reduce duplication.",
            "Designed and introduced Playwright based e2e automation architecture and CI pipeline stages for reliable regression coverage.",
            "Improved CI/CD simplicity and build performance via Docker multi-stage builds with stage-level caching.",
            "Upgraded React and Angular applications to patch vulnerabilities and align with newer framework standards.",
        ],
    },
    {
        role: "Developer",
        company: "Bank of New Zealand",
        period: "Feb 2019 - Nov 2023",
        bullets: [
            "Delivered daily used staff workflows including Visa card ordering, blocking, and unblocking across branch operations.",
            "Pioneered BNZ's first micro-frontend (AngularJS), then modernized it to React (TypeScript), setting patterns for future initiatives.",
            "Built frontend and microservice features end-to-end in a distributed microservices ecosystem.",
            "Automated ServiceNow standard-change creation pre-deployment, increasing release cadence from once every two days to multiple releases daily.",
            "Migrated Spring Boot APIs from Oracle JDK 8 to OpenJDK 11 to reduce technical debt and address vulnerabilities.",
            "Implemented Dynatrace monitoring/logging and maintained Cypress e2e coverage and onboarding documentation.",
        ],
    },
];

export function Experiences() {
    return (
        <Section id="experience">
            <div className="space-y-4">
                <div className="flex gap-2 items-center">
                    <BriefcaseBusiness className="size-5" />
                    <h3 className="text-xl font-semibold">Experience</h3>
                </div>

                {experiences.map((exp) => (
                    <Card id={exp.period}>
                        {/* header */}
                        <div>
                            <h3 className="font-bold text-xl">{exp.role}</h3>
                            <div className="text-zinc-400 grid">
                                <span>{exp.company}</span>
                                <span>{exp.period}</span>
                            </div>
                        </div>

                        {/* content */}
                        <div className="py-5">
                            <div className="grid gap-5">
                                {exp.bullets.map((resp) => (
                                    <span id={resp}>
                                        {resp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}