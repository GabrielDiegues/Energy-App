import { View } from "react-native";
import { useEventContext } from "../Navigation/Context/EventContext";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Location, UserEvent } from "../Types/Index";


// Types


const OutageDuration = () => {
    const {events, setEvents} = useEventContext();
    const [selectedValue, setSelectedValue] = useState<string>('');


    // Functions inside component
    const findEventByLocation = (locationEventId: number) => {
        return events.filter(event => event.id === locationEventId)[0].name;
    };


    const renderPickerItems = () => {
        const validLocations: Location[] = events.filter(event => event.locations).
        flatMap(event => {
            return event.locations.map(location => ({
                ...location,
            }));
        });

        return validLocations.map(location => (
            <Picker.Item
                key={`${location.id}`}
                label={`${findEventByLocation(location.eventId)}: ${location.city}, ${location.neighborhood}`}
                value={location.eventId.toString()}
            />
        ));
    };


    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                {renderPickerItems()}
            </Picker>
        </View>
    );
};
export default OutageDuration;
