import { Award } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";

export function CertsAward() {
    return (
        <Section>
            <SectionHeader>
                <Award size={30} className="stroke-primary" />
                <h2 className="text-2xl lg:text-3xl font-semibold">Certs & Awards</h2>
            </SectionHeader>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <span className="uppercase">Education</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-1">
                            <span className="font-bold">Bachelor of Computer and Information Science</span>
                            <span className="text-faded-fg">Auckland University of Technology</span>
                            <span className="text-faded-fg">Feb 2015 - Aug 2018</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <span className="uppercase">Certification</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <a
                            href="https://www.credly.com/badges/a788484c-dfee-40ad-a5b5-920053580638"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="p-1 underline underline-offset-4 hover:text-foreground-hover outline-0 focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Azure Fundamentals
                        </a>
                    </CardContent>
                </Card>
            </div>
        </Section>
    )
}