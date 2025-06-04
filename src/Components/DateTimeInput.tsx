import { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from '../Styles/GlobalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

// Types
type DateTimeInputProps = {
    inputType: 'date' | 'time';
    inputValue: Date;
    setInputValue: React.Dispatch<React.SetStateAction<Date>>;
}


type DisplayOptions = {
    date: boolean,
    time: boolean;
}


const DateTimeInput = ({inputType, inputValue, setInputValue}: DateTimeInputProps) => {
    const [showPicker, setShowPicker] = useState<DisplayOptions>({
        date: false,
        time: false,
    });


    // Functions inside component
    const onChange = (event: any, input?: Date) => {
        setShowPicker(prev => ({...prev, [inputType]: Platform.OS === 'ios'}));
        input && setInputValue(input);
    };

    return (
        <View>
            <Text style={styles.title}>Select the outage {inputType}:</Text>
            <Pressable onPress={() => setShowPicker(prev => ({...prev, [inputType]: true}))}>
                <TextInput
                    style={[styles.input, localStyles.input]}
                    editable={false}
                    value={(inputType === 'date' ? `${inputValue.toLocaleDateString('en-GB')} ${inputValue.toLocaleTimeString()}` : `${inputValue.toLocaleTimeString()}`)}
                />
            </Pressable>

            {showPicker[inputType] &&
            (<DateTimePicker
                value={inputValue}
                mode={inputType}
                display={'default'}
                onChange={onChange}
            />)}
        </View>
    );
};


const localStyles = StyleSheet.create({
    input: {
        marginTop: 10,
    },
});


export default DateTimeInput;
