import { AppLink } from "@/components/AppLink";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH3 } from "@/pages/Portfolio";

export function CertsAward() {
    return (
        <section>
            <div className="max-w-5xl mx-auto">
                <TypographyH3>Certs & Awards</TypographyH3>

                <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 mt-5">
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

            </div>
        </section>
    )
}