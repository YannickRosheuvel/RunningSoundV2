//import {useIsAuthenticated} from "@azure/msal-react"
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../pages/Main';
import Home from '../pages/Home';
import Run from '../pages/Run';
import Powerlifting from '../pages/Powerlifting';
import PushUps from '../pages/PushUps';
import Counter from '../components/Counter';
import SoundPlayer from '../components/SoundPlay';
import RegisterScreen from '../pages/RegisterScreen';
import Register from '../pages/Register'
import Insights from '../pages/Inights';
import { InAppTabNav } from "./InAppTabNav";
import { MyTabs } from './MyTabs';


const WelcomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator >
      {/* <Stack.Screen name="CreateCharacter" component={PageCharacter} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="App" component={InAppTabNav} options={{ headerShown: false }} />  */}
      <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name='Main'
        component={Main}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Run'
        component={Run}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Powerlifting'
        component={Powerlifting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PushUps'
        component={PushUps}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Counter'
        component={Counter}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name='SoundPlayer'
        component={SoundPlayer}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Insights'
        component={Insights}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>

  );
}


export default WelcomeStack;


