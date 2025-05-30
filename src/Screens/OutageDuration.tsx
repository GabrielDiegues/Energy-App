import { View } from "react-native";
import { useEventContext } from "../Navigation/Context/EventContext";
import { useState } from "react";


// Types
const OutageDuration = () => {
    const {events, setEvents} = useEventContext();
    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
        <View>
            
        </View>
    );
};
export default OutageDuration;
