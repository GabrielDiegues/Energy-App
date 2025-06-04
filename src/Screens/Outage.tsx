import { Text, TouchableOpacity, View } from 'react-native';
import { useEventContext } from '../Navigation/Context/EventContext';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from '../Styles/GlobalStyles';
import { Location, OutageDuration } from '../Types/Index';
import DateTimeInput from '../Components/DateTimeInput';


// Types


const Outage = () => {
    const {events, setEvents} = useEventContext();
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<Date>(new Date());
    const [selectedValue, setSelectedValue] = useState<string>('');


    // Functions inside component
    const saveOutage = () => {
        const [eventId, locationId] = selectedValue.split(' ').map(value => Number(value));
        const newOutageDuration: OutageDuration = {
        date: date.toLocaleDateString('en-GB'),
        duration: date.toLocaleTimeString(),
        };

        setEvents(prevEvents =>
            prevEvents.map(event => {
            if (event.id !== eventId) {return event;}
            return {
            ...event,
            locations: event.locations.map(location => {
                if (location.id !== locationId) {return location;}

                return {
                ...location,
                outageDuration: newOutageDuration,
                };
            }),
            };
        })
);


    };


    const findEventByLocation = (locationEventId: number) => {
        return events.filter(event => event.id === locationEventId)[0];
    };


    const renderPickerItems = () => {
        const validLocations: Location[] = events.filter(event => event.locations).
        flatMap(event => event.locations ?? []);

        return validLocations.map(location => {
            const event = findEventByLocation(location.eventId);
            return (
                <Picker.Item
                    key={`${location.id}`}
                    label={`${event.name}(ID: ${event.id}): ${location.city}, ${location.neighborhood}`}
                    value={`${location.eventId.toString()} ${location.id}`}
                />
            );
        });
    };


    return (
        <View>
            <Text style={styles.title}>Select the affected location:</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                {renderPickerItems()}
            </Picker>

            <DateTimeInput
                inputType="date"
                inputValue={date}
                setInputValue={setDate}
            />
            <DateTimeInput
                inputType="time"
                inputValue={time}
                setInputValue={setTime}
            />

            <TouchableOpacity style={styles.buttonContainer} onPress={() => saveOutage()}>
                <Text>Save Outage</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Outage;
