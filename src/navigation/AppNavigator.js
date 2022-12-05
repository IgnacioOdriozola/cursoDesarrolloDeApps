import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Component1 from "../screens/Component1";
import Component2 from "../screens/Component2";
import ShoppingList from "../screens/ShoppingList";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="ShoppingList" component={ShoppingList} />
                <Stack.Screen name="Component1" component={Component1}/>
                <Stack.Screen name="Component2" component={Component2}/>
            </Stack.Navigator>
    )
}