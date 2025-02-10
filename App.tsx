import { Routes } from '@/routes';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="light" translucent={true}/>
      <Routes/>
    </GestureHandlerRootView>
  );
}

