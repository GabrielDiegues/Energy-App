import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../Types/Navigation';
import Overview from '../Screens/Overview';
import AffectedLocations from '../Screens/AffectedLocations';

const Tabs = createBottomTabNavigator<HomeTabParamList>();

const Home = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Overview"
                component={Overview}
            />

            <Tabs.Screen
                name="AffectedLocations"
                component={AffectedLocations}
            />
        </Tabs.Navigator>
    );
};

export default Home;
