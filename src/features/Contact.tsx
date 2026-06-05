import { MailIcon, PhoneCallIcon } from "lucide-react";
import { LinkedInIcon } from "@/icons/LinkedInIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import type { ComponentProps, ReactNode } from "react";
import { AppLink } from "@/components/AppLink";
import { ContactEnum, contactList, type ContactType } from "@/services/contactService";

type ContactMap = ContactType & { icon: ReactNode };

const iconMap: Record<ContactEnum, ReactNode> = {
    [ContactEnum.GITHUB]: <GithubIcon className="fill-primary size-5" />,
    [ContactEnum.EMAIL]: <MailIcon className="size-5" />,
    [ContactEnum.LINKEDIN]: <LinkedInIcon className="fill-primary size-5" />,
    [ContactEnum.TELEPHONE]: <PhoneCallIcon className="size-5" />
}

const contactListMap: ContactMap[] = contactList.map((contact) => ({ ...contact, icon: iconMap[contact.type] }));

const ListItem = (props: ComponentProps<"li">) => {
    return (
        <li
            className="flex items-center gap-4"
            {...props}
        />
    )
}

const Link = (props: ComponentProps<typeof AppLink>) => {
    return (
        <AppLink
            className="group flex items-center gap-4"
            {...props}
        />
    )
}

export const Contact = () => {
    return (
        <ul className="lg:space-y-2">
            {contactListMap.map((item) => {
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