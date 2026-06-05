import { WrenchIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { Heading } from "@/components/Heading";
import { SectionIcon } from "@/components/SectionIcon";
import { Card, CardContent } from "@/components/ui/card";
import { getSkills } from "@/lib/services/skillsService";

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
                <CardContent className="space-y-2 lg:space-y-5">
                    <dl className="grid gap-1">
                        {getSkills().map((item) => (
                            <div key={item.category}>
                                <dt className="font-bold">{item.category}</dt>
                                <dd>{item.skills.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </CardContent>
            </Card>
        </Section >
    )

}