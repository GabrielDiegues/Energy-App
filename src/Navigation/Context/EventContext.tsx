import { createContext, useContext, useState } from 'react';
import { UserEvent } from '../../Types/Index';


const test: UserEvent = {
    id: 1,
    name: 'Accident',
    locations: [{
        id: 1,
        eventId: 1,
        neighborhood: 'Vila Cruzeiro',
        city: 'Sao Paulo',
        cep: '04726160',
        outageDuration: {
            date: '12/01/2004',
            duration: '1:00',
        },
    }],
    damages: ['Car crash'],
};

// 1. Define what data the context will provide
type EventContextType = {
    events: UserEvent[];
    setEvents: React.Dispatch<React.SetStateAction<UserEvent[]>>;
};


// 2. Create the context
const EventContext = createContext<EventContextType | undefined>(undefined);

// 3. Create a custom hook for easier usage
export const useEventContext = () => {
    const context = useContext(EventContext);
    if(!context) { throw new Error('useEventContext must be used inside EventProvider'); }
    return context;
};



// 4. Create the provider component
export const EventProvider = ({children}: {children: React.ReactNode}) => {
    const [events, setEvents] = useState<UserEvent[]>([test]);


    return (
        <EventContext.Provider value={{events, setEvents}}>
            {children}
        </EventContext.Provider>
    );
};
