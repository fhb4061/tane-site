import { MapPin } from "lucide-react";
import { Contact } from "./Contact";
import { Heading } from "../components/Heading";
import { Cluster } from "../components/layout/Cluster";
import { Stack } from "../components/layout/Stack";

export function Hero() {
    return (
        <Stack className="space-y-2 lg:space-y-5">
            <div className="flex flex-col border-b border-primary pb-2 lg:pb-4">
                <Heading>
                    <span className="uppercase">Jonathan Lopeti</span>
                </Heading>
                <Heading level={2}>
                    <span className="font-thin">Full-Stack Engineer</span>
                </Heading>

                <Cluster className="mt-2">
                    <MapPin size={20} className="stroke-primary" />
                    <span>Melbourne, Australia</span>
                </Cluster>
            </div>
            <Contact />
        </Stack>
    )
}