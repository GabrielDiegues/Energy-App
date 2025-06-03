import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useEventContext } from "../Navigation/Context/EventContext";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "../Styles/GlobalStyles";
import { Location } from "../Types/Index";


// Types
type DisplayOptions = {
    date: boolean,
    time: boolean;
}

const OutageDuration = () => {
    const {events, setEvents} = useEventContext();
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<Date>(new Date());
    const [showPicker, setShowPicker] = useState<DisplayOptions>({
        date: false,
        time: false,
    });


    // Functions inside component
    const onChange = (event: any, selectedDate?: Date) => {
        setShowPicker(prev => ({...prev, date: Platform.OS === 'ios'}));
        selectedDate && setDate(selectedDate);
    };


    const findEventByLocation = (locationEventId: number) => {
        return events.filter(event => event.id === locationEventId)[0].name;
    };


    const renderPickerItems = () => {
        const validLocations: Location[] = events.filter(event => event.locations).
        flatMap(event => event.locations ?? []);

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
            <Text style={styles.title}>Select the affected location:</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                {renderPickerItems()}
            </Picker>

            <Text style={styles.title}>Select the outage date:</Text>
            <Pressable onPress={() => setShowPicker(prev => ({...prev, date: true}))}>
                <TextInput
                    style={[styles.input, localStyles.input]}
                    editable={false}
                    value={`${date.toLocaleDateString('en-GB')} ${date.toLocaleTimeString()}`}
                />
            </Pressable>

            {showPicker.date &&
            (<DateTimePicker
                value={date}
                mode={'date'}
                display={'default'}
                onChange={onChange}
            />)}


            <Pressable>
                
            </Pressable>
        </View>
    );
};


const localStyles = StyleSheet.create({
    input: {
        marginTop: 10,
    },
});


export default OutageDuration;
