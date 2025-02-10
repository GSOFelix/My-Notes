import { Home } from "@/screens/Home";
import { NewNote } from "@/screens/NewNote";
import { propsNavigationStack } from "@/types/navigationTypes/navigationProps";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewNote" component={NewNote}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}