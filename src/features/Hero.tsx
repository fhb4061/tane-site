import { MapPin } from "lucide-react";
import { Contact } from "./Contact";
import { Heading } from "@/components/Heading";

export function Hero() {
    return (
        <div className="lg:space-y-5 space-y-4">
            <div className="flex flex-col border-b border-primary pb-2 lg:pb-4">
                <Heading>
                    <span className="uppercase">Jonathan Lopeti</span>
                </Heading>
                <Heading level={2}>
                    <span className="font-thin">Full-Stack Engineer</span>
                </Heading>

                <div className="flex gap-2 items-center mt-2">
                    <MapPin size={20} className="stroke-primary" />
                    <span>Melbourne, Australia</span>
                </div>
            </div>
            <Contact />
        </div>
    )
}