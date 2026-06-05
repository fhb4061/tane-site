import { BriefcaseBusiness, MapPin } from "lucide-react";
import { TypographyH1 } from "@/pages/Portfolio";

export function About() {

    return (
        <section id="about">
            <div className="max-w-5xl mx-auto">
                <div className="mb-5 leading-relaxed">
                    <div className="mb-1">
                        <p>Mālō e lelei, I'm</p>
                        <TypographyH1>Jonathan Lopeti</TypographyH1>
                    </div>

                    <div className="flex gap-5 text-sm md:text-xl lg:text-xl">
                        <div className="flex gap-2 items-center">
                            <BriefcaseBusiness className="size-5 stroke-primary" />
                            <span>Senior Developer</span>
                        </div>

                        <div className="flex gap-2 items-center">
                            <MapPin className="size-5 stroke-primary" />
                            <span>Melbourne, Australia</span>
                        </div>
                    </div>
                </div>

                <p className="text-lg leading-7 tracking-wide">
                    I specialize in React Typescript and Java Spring Boot with a strong focus on clean architecture, simplicity, performance, and both user and developer experience. I have delivered scalable, user-centric software across banking and public-sector domains.
                </p>
            </div>
        </section>
    )
}