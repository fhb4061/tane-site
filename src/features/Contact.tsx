import { MailIcon, PhoneCallIcon } from "lucide-react";
import { LinkedInIcon } from "@/icons/LinkedInIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import type { ComponentProps, ReactNode } from "react";
import { AppLink } from "@/components/AppLink";

type ContactType = {
    link: string;
    label: string;
    icon: ReactNode;
}

const contactList: ContactType[] = [
    {
        link: "mailto:jonathanlopeti@gmail.com",
        label: "jonathanlopeti@gmail.com",
        icon: <MailIcon className="size-5" />
    },
    {
        link: "https://www.linkedin.com/in/tane-lopeti",
        label: "linkedin.com/in/tane-lopeti",
        icon: <LinkedInIcon className="fill-primary size-5" />
    },
    {
        link: "https://github.com/fhb4061",
        label: "github.com/fhb4061",
        icon: <GithubIcon className="fill-primary size-5" />
    },
    {
        link: "tel:+61401237175",
        label: "+61 401 237 175",
        icon: <PhoneCallIcon className="size-5" />
    },
]

function ListItem(props: ComponentProps<"li">) {
    return (
        <li
            className="flex items-center gap-4"
            {...props}
        />
    )
}

function Link(props: ComponentProps<typeof AppLink>) {
    return (
        <AppLink
            className="group flex items-center gap-4"
            {...props}
        />
    )
}

export function Contact() {
    return (
        <ul className="lg:space-y-2">
            {contactList.map((item) => {
                return (
                    <ListItem key={item.link}>
                        <Link
                            href={item.link}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    </ListItem>
                )
            })}
        </ul>
    )
}