import { MapPin } from "lucide-react";
import { Contact } from "./Contact";

export function Hero() {
    return (
        <div className="space-y-5">
            <div className="flex flex-col border-b border-primary pb-4">
                <h1 className="uppercase font-bold text-3xl lg:text-4xl">Jonathan Lopeti</h1>
                <h2 className="text-lg lg:text-2xl font-thin">Full-Stack Engineer</h2>

                <div className="flex items-center gap-2 mt-2">
                    <MapPin size={20} className="stroke-primary" />
                    <span>Melbourne, Australia</span>
                </div>
            </div>
            <Contact />
        </div>
    )
}