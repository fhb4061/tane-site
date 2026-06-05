import { Card, CardContent } from "@/components/ui/card";
import { TypographyH3 } from "@/pages/Portfolio";
import { skills } from "@/lib/services/skillService";

export function Skills() {
    return (
        <section id="skills">
            <div className="max-w-5xl mx-auto">
                <TypographyH3>Skills</TypographyH3>

                <Card className="mt-5">
                    <CardContent>
                        <dl className="grid gap-1">
                            {skills.map((item) => (
                                <div key={item.category}>
                                    <dt className="font-bold">{item.category}</dt>
                                    <dd>{item.skills.join(", ")}</dd>
                                </div>
                            ))}
                        </dl>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}