type Location = {
    id: number;
    eventId: number;
    neighborhood: string;
    city: string;
    cep: string;
}


type UserEvent = {
    id: number;
    name: string;
    date: string;
    locations: Location[];
    duration: string;
    damages: string[];
}

type Events = {
    data: UserEvent[]
}

export type {UserEvent, Location, Events};
