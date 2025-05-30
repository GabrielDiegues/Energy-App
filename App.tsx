import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './src/Types/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Navigation/Home';
import { EventProvider } from './src/Navigation/Context/EventContext';

const Stack = createNativeStackNavigator<AppStackParamList>();
function App(): React.JSX.Element {
  return (
    <EventProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </EventProvider>
  );
}

export default App;
