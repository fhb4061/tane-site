import { MailIcon, PhoneCallIcon } from "lucide-react";
import { LinkedInIcon } from "../components/LinkedInIcon";
import { GithubIcon } from "../components/GithubIcon";
import type { ComponentProps } from "react";

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
    phoneNumber: "+61401237175",
    phoneLabel: "+61 401 237 175",
    linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
    linkedinLabel: "linkedin.com/in/tane-lopeti",
    githubLabel: "github.com/fhb4061",
    githubLink: "https://github.com/fhb4061",
}

function ListItem(props: ComponentProps<"li">) {
    return (
        <li
            className="flex items-center gap-4"
            {...props}
        />
    )
}

function Link(props: ComponentProps<"a">) {
    return (
        <a
            className="group flex items-center gap-4 p-1 underline underline-offset-4 hover:text-foreground-hover outline-0 focus-visible:ring-2 focus-visible:ring-primary"
            {...props}
        />
    )
}

export function Contact() {
    return (
        <ul className="lg:space-y-2.5">
            <ListItem>
                <Link href={`mailto:${contact.email}`}>
                    <MailIcon className="size-5 stroke-primary group-hover:stroke-foreground-hover" />
                    {contact.email}
                </Link>
            </ListItem>

            <ListItem>
                <Link
                    href={contact.linkedinUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedInIcon className="size-5 fill-primary group-hover:fill-foreground-hover" />
                    {contact.linkedinLabel}
                </Link>
            </ListItem>

            <ListItem>
                <Link
                    href={contact.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GithubIcon className="size-5 fill-primary group-hover:fill-foreground-hover" />
                    {contact.githubLabel}
                </Link>
            </ListItem>

            <ListItem>
                <Link href={`tel:${contact.phoneNumber}`}>
                    <PhoneCallIcon className="size-5 stroke-primary group-hover:stroke-foreground-hover" />
                    {contact.phoneLabel}
                </Link>
            </ListItem>
        </ul>
    )
}