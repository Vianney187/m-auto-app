import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';
import Login from './Screens/Login';
import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './Redux/store';
import Panier from './Screens/Pannier';

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const user  = useSelector((state: any) => state.user);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    return (
      <NavigationContainer> 
      {(!(appIsReady && user.token) ? <Login /> :
        <Stack.Navigator initialRouteName="HOME" screenOptions={{headerShown: false}}>
          <Stack.Screen name="HOME" component={Home} />
          <Stack.Screen name="PANIER" component={Panier} />
        </Stack.Navigator>)}
      </NavigationContainer>)
}

export default function AppWrapper() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}