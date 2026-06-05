export enum ContactEnum {
    EMAIL,
    LINKEDIN,
    GITHUB,
}

export type ContactType = {
    type: ContactEnum,
    link: string;
    label: string;
}

export const getContacts = (): ContactType[] => {
    return [
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
    ];
}