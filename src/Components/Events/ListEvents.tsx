import { StyleSheet, Text, View } from 'react-native';
import { Location, UserEvent } from '../../Types/Index';

type ListEventsProps = {
    event: UserEvent;
}

const renderLocations = (locations: Location[]) => {
    let text: string = '| ';
    locations.forEach((location) => {
        text += `${location.city}, ${location.neighborhood}, ${location.cep} | `;
    });
    return text;
};

const ListEvents = ({event}: ListEventsProps) => {
    return (
        <View style={styles.container}>
            <Text>ID: {event.id}</Text>
            <Text>Description: {event.name.trim() ? event.name : 'undefined'}</Text>
            <Text>Date: {event.date.trim() ? event.date : 'undefined'}</Text>
            <Text>Locations: {event.locations.length ? renderLocations(event.locations) : 'undefined'}</Text>
            <Text>Damages: {event.damages.length ? event.damages : 'undefined'} {'\n'}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
});

export default ListEvents;
