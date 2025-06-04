import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../Types/Navigation';
import Overview from '../Screens/Overview';
import AffectedLocations from '../Screens/AffectedLocations';
import Outage from '../Screens/Outage';
import Damages from '../Screens/Damages';

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
                name="Outage"
                component={Outage}
            />

            <Tabs.Screen
                name="Damages"
                component={Damages}
            />
        </Tabs.Navigator>
    );
};

export default Home;
