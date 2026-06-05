import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH3 } from "@/pages/Portfolio";
import { experiences } from "@/lib/services/experienceService";

export function Experiences() {
    return (
        <section id="experiences">
            <div className="max-w-5xl mx-auto">
                <TypographyH3>Experiences</TypographyH3>

                <div className="mt-5 flex flex-col gap-5">
                    {experiences.map((exp) => (
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
                </div>
            </div>
        </section>
    )
}