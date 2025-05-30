import { Alert } from 'react-native';

const screenAlert = (title: string, description: string) => {
    Alert.alert(
        `${title}`,
        `${description}`,
        [
            {text: 'close'},
        ],
        {cancelable: true}
    );
};

export default screenAlert;
