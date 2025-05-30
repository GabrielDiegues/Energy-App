import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ListEvents from '../Components/Events/ListEvents';
import { UserEvent } from '../Types/Index';
import { useEventContext } from '../Navigation/Context/EventContext';

const Overview = () => {
    const {events, setEvents} = useEventContext();


    // Functions
    const createEvent = () => {
        const newEvent: UserEvent = {
            id: (events.length + 1),
            name: '',
            date: '',
            locations: [],
            duration: '',
            damages: [],
        };

        setEvents(prevEvents => [...prevEvents, newEvent]);
    };


    return (
        <FlatList
            ListHeaderComponent={
            <TouchableOpacity style={styles.buttonContainer} onPress={() => createEvent()}>
                <Text>Create new event</Text>
            </TouchableOpacity>
            }
            data={events}
            renderItem={({item}) => <ListEvents event={item}/>}
            keyExtractor={(item) => item.id.toString()}
        />
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
