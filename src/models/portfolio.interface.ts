import { Social, ChangeLog, Updates } from '.';

export interface Portfolio {
    firstName: string;
    middleName: string;
    lastName: string;
    subheading: string;
    socialMedia: Social[];
    introduction: string;
    changeLog: ChangeLog[];
    updates: Updates[];
    speakerBio: string;
}
