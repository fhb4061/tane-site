import { BriefcaseBusiness } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { SectionIcon } from "@/components/SectionIcon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getExperiences } from "@/lib/services/experiencesService";

export function Experiences() {
    return (
        <Section id="experience">
            <SectionHeader>
                <SectionIcon icon={BriefcaseBusiness} />
                <Heading level={2}>
                    <span className="uppercase">Experiences</span>
                </Heading>
            </SectionHeader>

            {getExperiences().map((exp) => (
                <Card key={exp.period} id={exp.period}>
                    <CardHeader>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription>
                            <p>{exp.company}</p>
                            <p>{exp.period}</p>
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ul className="grid gap-5">
                            {exp.bullets.map((detail) => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}

        </Section>
    )
}