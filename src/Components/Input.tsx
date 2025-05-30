import { StyleSheet, TextInput } from 'react-native';

type InputProps = {
    msg: string;
    userInput: string;
    onChangeText: (text: string) => void;
}


const Input = ({msg, userInput, onChangeText}: InputProps) => {
    return (
        <TextInput style={styles.input}
            onChangeText={onChangeText}
            value={userInput}
            placeholder={msg}
        />
    );
};


const styles = StyleSheet.create({
    input: {
        fontSize: 13,
        borderWidth: 1,
        marginTop: 35,
    },
});
export default Input;
