type OutageDuration = {
    date: string;
    duration: string;
}

type Location = {
    id: number;
    eventId: number;
    neighborhood: string;
    city: string;
    cep: string;
    outageDuration?: OutageDuration;
}


type UserEvent = {
    id: number;
    name: string;
    locations: Location[];
    damages: string[];
}

type Events = {
    data: UserEvent[]
}

export type {UserEvent, Location, OutageDuration, Events};
