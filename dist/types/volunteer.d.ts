export type Volunteer = {
    id: string;
    firstname: string;
    lastname: string;
    active: boolean;
    job: {
        label: string;
        company: {
            name?: string;
            url?: string;
        };
    };
    socials: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        website?: string;
    };
    picture?: string;
};
