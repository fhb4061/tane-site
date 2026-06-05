import { MailIcon, PhoneCallIcon } from "lucide-react";
import { LinkedInIcon } from "@/icons/LinkedInIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import type { ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import { ContactEnum, getContacts, type ContactType } from "@/lib/services/contactsService";

type ContactMap = ContactType & {
    icon: ReactNode;
}

const iconMap: Record<ContactEnum, ReactNode> = {
    [ContactEnum.EMAIL]: <MailIcon className="size-5" />,
    [ContactEnum.LINKEDIN]: <LinkedInIcon className="fill-primary size-5" />,
    [ContactEnum.GITHUB]: <GithubIcon className="fill-primary size-5" />,
    [ContactEnum.TELEPHONE]: <PhoneCallIcon className="size-5" />
}

export function Contact() {
    const contactList: ContactMap[] = getContacts().map((item) => ({ ...item, icon: iconMap[item.type] }));

    return (
        <ul className="flex gap-2">
            {contactList.map((item) => {
                return (
                    <li key={item.link}>
                        <AppLink
                            href={item.link}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="hover:text-primary-foreground fill-primary hover:fill-primary-foreground"
                        >
                            {item.icon}
                        </AppLink>
                    </li>
                )
            })}
        </ul>
    )
}