import { FolderGit2, MailIcon, MessageSquareMore, PhoneCallIcon } from "lucide-react";

type PortfolioContact = {
    email: string;
    phoneNumber: string;
    phoneLabel: string;
    linkedinUrl: string;
    linkedinLabel: string;
    githubLabel: string;
    githubLink: string;
};

// usually get this from api maybe but will leave it here for simplicity
const contact: PortfolioContact = {
    email: "jonathanlopeti@gmail.com",
    phoneNumber: "+61 401 237 175",
    phoneLabel: "+61 401 237 175",
    linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
    linkedinLabel: "linkedin.com/in/tane-lopeti",
    githubLabel: "github.com/fhb4061",
    githubLink: "https://github.com/fhb4061",
}

export function Contact() {
    return (
        <ul className="space-y-2.5">
            <li className="flex items-center gap-4">
                <MailIcon className="size-4" />
                <a className="underline underline-offset-4 hover:text-foreground-hover" href={`mailto:${contact.email}`}>
                    {contact.email}
                </a>
            </li>

            <li className="flex items-center gap-4">
                <MessageSquareMore className="size-4" />
                <a
                    className="underline underline-offset-4 hover:text-foreground-hover"
                    href={contact.linkedinUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {contact.linkedinLabel}
                </a>
            </li>

            <li className="flex items-center gap-4">
                <FolderGit2 className="size-4" />
                <a
                    className="underline underline-offset-4 hover:text-foreground-hover"
                    href={contact.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {contact.githubLabel}
                </a>
            </li>

            <li className="flex items-center gap-4">
                <PhoneCallIcon className="size-4" />
                <a
                    className="underline underline-offset-4 hover:text-foreground-hover"
                    href={`tel:${contact.phoneNumber}`}
                >
                    {contact.phoneLabel}
                </a>
            </li>
        </ul>
    )
}