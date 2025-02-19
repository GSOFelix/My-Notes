import { Home } from '@/screens/Home';
import { Tarefas } from '@/screens/Tarefas';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

export function BottoTabsNavigation() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          backgroundColor: '#95f9c3', 
          borderTopWidth: 0, 
          elevation: 0, 
          shadowOpacity: 0,
        }
        }}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Tarefas' component={Tarefas}/>
    </Tab.Navigator>
  );
}