import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OtherScreen from "../screens/OtherScreen";

const Stack = createNativeStackNavigator();

export default OtherNavigator = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="OtherScreen" component={OtherScreen} options={{title:"Other"}}/>
            </Stack.Navigator>
    )
}