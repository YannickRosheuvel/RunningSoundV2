import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../pages/Main';
import Home from '../pages/Home';
import Run from '../pages/Run';
import Powerlifting from '../pages/Powerlifting';
import PushUps from '../pages/PushUps';
import Counter from '../components/Counter';
import SoundPlayer from '../components/SoundPlay';
import RegisterScreen from '../pages/RegisterScreen';
import Register from '../pages/Register';
import Insights from '../pages/Inights';

const Stack = createStackNavigator();

export default function Navigate() {
    return <Stack.Navigator>

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
                        <Stack.Screen
                name='SoundPlayer'
                component={SoundPlayer}
                options={{ headerShown: false }}
            />
                                    <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
                                                <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }}
            />
                                                            <Stack.Screen
                name='Insights'
                component={Insights}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

}