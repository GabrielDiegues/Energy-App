import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Input from '../Components/Input';
import { useEventContext } from '../Navigation/Context/EventContext';
import { Location } from '../Types/Index';
import RenderList from '../Components/Events/RenderList';
import screenAlert from '../Utils/DisplayMessages';

// Types
type LocationFields = {
    eventId: string,
    neighborhood: string,
    city: string,
    cep: string,
}


// Functions outside the component
const isNumber = (str: string): boolean => {
    return !isNaN(Number(str.trim()));
};


const AffectedLocations = () => {
    const {events, setEvents} = useEventContext();
    const [userInput, setUserInput] = useState<LocationFields>({
        eventId: '',
        neighborhood: '',
        city: '',
        cep: '',
    });


    // Functions inside the component
    const changeText = (text: string, prop: string) => {
        (prop === 'eventId' && !isNumber(text)) ?
        setUserInput(prev => ({...prev, eventId: ''})) :
        setUserInput(prev => ({...prev, [prop]: text}));
    };


    const createLocation = (formValue: LocationFields) => {
        const id: number = Number(formValue.eventId);


        const hasEmptyField = Object.values(formValue).some(value => value.trim() === '');
        if(hasEmptyField) {
            screenAlert('Empty fields', 'Please, fill in all the fields');
        }
        else if(events.some(event => event.id === id)) {
            setEvents(prev => {
                const newLocation: Location = {
                    id: (prev[id - 1].locations.length + 1),
                    eventId: id,
                    neighborhood: formValue.neighborhood,
                    city: formValue.city,
                    cep: formValue.cep,
                };


                const updatedEvent = {
                    ...prev[id - 1],
                    locations:[...prev[id - 1].locations, newLocation],
                };


                const newEvents = [...prev];
                newEvents[id - 1] = updatedEvent;
                screenAlert('Data Registered', 'Affected location registered with success');
                return newEvents;
            });
        }
        else {
            screenAlert('Event ID not located', 'Please, enter a registered ID');
        }
    };


    return (
        <View>
            <Input
                msg="Event ID"
                userInput={String(userInput.eventId)}
                onChangeText={(text: string) =>
                    changeText(text, 'eventId')
                }
            />

            <Input
                msg="Neighborhood"
                userInput={userInput.neighborhood}
                onChangeText={(text: string) =>
                    changeText(text, 'neighborhood')
                }
            />

            <Input
                msg="City"
                userInput={userInput.city}
                onChangeText={(text: string) =>
                    changeText(text, 'city')
                }
            />

            <Input
                msg="cep"
                userInput={userInput.cep}
                onChangeText={(text: string) =>
                    changeText(text, 'cep')
                }
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => createLocation(userInput)}>
                <Text>Register</Text>
            </TouchableOpacity>

            <FlatList
                data={events}
                renderItem={({item}) =>
                    <RenderList
                        event={item}
                        showId={true}
                        showLocations={true}
                        showName={true}
                    />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50,
    },
});

export default AffectedLocations;
