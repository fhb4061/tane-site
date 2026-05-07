import { MailIcon, MapPin, MessageSquareMore, PhoneCallIcon } from "lucide-react";

type PortfolioContact = {
    email: string;
    phone: string;
    linkedinUrl: string;
    linkedinLabel: string;
    location: string;
};

// usually get this from api maybe but will leave it here for simplicity
const contact: PortfolioContact = {
    email: "jonathanlopeti@gmail.com",
    phone: "+61 401 237 175",
    linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
    linkedinLabel: "linkedin.com/in/tane-lopeti",
    location: "Melbourne, Australia",
}

export function Contact() {
    return (
        <ul className="space-y-2.5">
            <li className="flex items-center gap-4">
                <MailIcon className="size-4" />
                <a className="underline underline-offset-4 hover:text-zinc-300" href={`mailto:${contact.email}`}>
                    {contact.email}
                </a>
            </li>

            <li className="flex items-center gap-4">
                <MessageSquareMore className="size-4" />
                <a
                    className="underline underline-offset-4 hover:text-zinc-300"
                    href={contact.linkedinUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {contact.linkedinLabel}
                </a>
            </li>

            <li className="flex items-center gap-4">
                <PhoneCallIcon className="size-4" />
                {contact.phone}
            </li>

            <li className="flex items-center gap-4">
                <MapPin className="size-4" />
                {contact.location}
            </li>
        </ul>
    )
}