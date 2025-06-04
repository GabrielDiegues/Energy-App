import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RenderList from '../Components/Events/RenderList';
import { UserEvent } from '../Types/Index';
import { useEventContext } from '../Navigation/Context/EventContext';
import Input from '../Components/Input';
import { useState } from 'react';
import screenAlert from '../Utils/DisplayMessages';

const Overview = () => {
    const {events, setEvents} = useEventContext();
    const [userInput, setUserInput] = useState<string>('');


    // Functions inside the component
    const createEvent = () => {
        if(userInput) {
            const newEvent: UserEvent = {
                id: (events.length + 1),
                name: userInput,
                locations: [],
                damages: [],
            };
            setEvents(prevEvents => [...prevEvents, newEvent]);
        }
        else {
            screenAlert('Error', 'Please, type a description');
        }
    };


    return (
        <View>
            <Input
                msg="Event's description"
                userInput={userInput}
                onChangeText={setUserInput}
            />

            <FlatList
                ListHeaderComponent={
                <TouchableOpacity style={styles.buttonContainer} onPress={() => createEvent()}>
                    <Text>Create new event</Text>
                </TouchableOpacity>
                }
                data={events}
                renderItem={({item}) =>
                <RenderList
                    event={item}
                    showId={true}
                    showName={true}
                    showLocations={true}
                    showDamages={true}
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
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 50,
        marginRight: 50,
    },
});

export default Overview;
