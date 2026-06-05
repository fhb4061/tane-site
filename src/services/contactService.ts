export enum ContactEnum {
    EMAIL,
    GITHUB,
    LINKEDIN,
    TELEPHONE
}

export type ContactType = {
    type: ContactEnum;
    link: string;
    label: string;
}

export const contactList: ContactType[] = [
    {
        type: ContactEnum.EMAIL,
        link: "mailto:jonathanlopeti@gmail.com",
        label: "jonathanlopeti@gmail.com",
    },
    {
        type: ContactEnum.LINKEDIN,
        link: "https://www.linkedin.com/in/tane-lopeti",
        label: "linkedin.com/in/tane-lopeti",
    },
    {
        type: ContactEnum.GITHUB,
        link: "https://github.com/fhb4061",
        label: "github.com/fhb4061",
    },
    {
        type: ContactEnum.TELEPHONE,
        link: "tel:+61401237175",
        label: "+61 401 237 175",
    },
]