import { MapPin } from "lucide-react";
import { Contact } from "./Contact";
import { Heading } from "../components/Heading";

export function Hero() {
    return (
        <div className="space-y-2 lg:space-y-5">
            <div className="flex flex-col border-b border-primary pb-2 lg:pb-4">
                <Heading>
                    <span className="uppercase">Jonathan Lopeti</span>
                </Heading>
                <Heading size={2}>
                    <span className="font-thin">Full-Stack Enginner</span>
                </Heading>

                <div className="flex items-center gap-2 mt-2">
                    <MapPin size={20} className="stroke-primary" />
                    <span>Melbourne, Australia</span>
                </div>
            </div>
            <Contact />
        </div>
    )
}