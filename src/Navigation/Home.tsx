import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../Types/Navigation';
import Overview from '../Screens/Overview';
import AffectedLocations from '../Screens/AffectedLocations';
import OutageDuration from '../Screens/OutageDuration';

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

            <Tabs.Screen
                name="OutageDuration"
                component={OutageDuration}
            />
        </Tabs.Navigator>
    );
};

export default Home;
