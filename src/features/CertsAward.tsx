import { Award } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Heading } from "../components/Heading";
import { AppLink } from "../components/AppLink";
import { SectionIcon } from "../components/Icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CertsAward() {
    return (
        <Section id="certs">
            <SectionHeader>
                <SectionIcon icon={Award} />
                <Heading level={2}>
                    <span className="uppercase">Certs & Awards</span>
                </Heading>
            </SectionHeader>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-1 text-sm">
                        <span className="font-bold">Bachelor of Computer and Information Science</span>
                        <span className="text-muted-foreground">Auckland University of Technology</span>
                        <span className="text-muted-foreground">Feb 2015 - Aug 2018</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Certification
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AppLink
                            href="https://www.credly.com/badges/a788484c-dfee-40ad-a5b5-920053580638"
                            external
                        >
                            Azure Fundamentals
                        </AppLink>
                    </CardContent>
                </Card>
            </div>
        </Section>
    )
}