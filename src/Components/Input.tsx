import { TextInput } from 'react-native';
import styles from '../Styles/GlobalStyles';

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

export default Input;
