import { StyleSheet, Text, View } from 'react-native';
import { Location, UserEvent } from '../../Types/Index';

type RenderListProps = {
    event: UserEvent;
    showId?: boolean;
    showName?: boolean;
    showLocations?: boolean;
    showDamages?: boolean;
}

const renderLocations = (locations: Location[]) => {
    let text: string = '| ';
    locations.forEach((location) => {
        text += `${location.city}, ${location.neighborhood}, ${location.cep}` + (location.outageDuration ? `, ${location.outageDuration?.date}, ${location.outageDuration?.duration}` : ', date undefined, duration undefined') + ' | ';
    });
    return text;
};

const RenderList = ({event, showId, showName, showLocations, showDamages}: RenderListProps) => {
    return (
        <View style={styles.container}>
            {showId && <Text>Event ID: {event.id}</Text>}
            {showName && <Text>Description: {event.name.trim() ? event.name : 'undefined'}</Text>}
            {showLocations && <Text>Locations: {event.locations.length ? renderLocations(event.locations) : 'undefined'}</Text>}
            {showDamages && <Text>Damages: {event.damages.length ? event.damages : 'undefined'}</Text>}
            <Text />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
});

export default RenderList;
