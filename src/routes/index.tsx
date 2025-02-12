import { DB_NAME } from "@/constant/dbConstants";
import { InitializeDataBase } from "@/database/sqLite/db";
import { EditNote } from "@/screens/EditNote";
import { Home } from "@/screens/Home";
import { NewNote } from "@/screens/NewNote";
import { NoteDetails } from "@/screens/NoteDetails";
import { propsNavigationStack } from "@/types/navigationTypes/navigationProps";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { SQLiteProvider } from "expo-sqlite";

const Stack = createStackNavigator<propsNavigationStack>();

export function Routes() {
    return (
        <NavigationContainer >
            <SQLiteProvider databaseName={DB_NAME} onInit={InitializeDataBase}>
                <Stack.Navigator initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        ...TransitionPresets.FadeFromBottomAndroid
                    }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="NewNote" component={NewNote} />
                    <Stack.Screen name="NoteDetails" component={NoteDetails} />
                    <Stack.Screen name="EditNote" component={EditNote} />
                </Stack.Navigator>
            </SQLiteProvider>
        </NavigationContainer>
    );
}