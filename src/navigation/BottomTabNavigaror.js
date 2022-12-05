import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import OtherNavigator from "./OtherNavigator";

const BottomTabs = createBottomTabNavigator();

export default Tabs = () => {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator>
                <BottomTabs.Screen name="appTab" component={AppNavigator}/>
                <BottomTabs.Screen name="otherTab " component={OtherNavigator}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}