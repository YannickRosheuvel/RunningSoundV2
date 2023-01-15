import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from '../pages/Main';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import React from "react";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export const InAppTabNav = () => {
    
    const Tab = createBottomTabNavigator();

    let [fontsLoaded] = useFonts({
      Poppins_600SemiBold,
      Poppins_400Regular,
    });
  
    return (
      <AppearanceProvider>
                    <TouchableHighlight onPress={NavigateHome} style={styles.touchArrow}>
                <Image style={styles.arrow} source={arrow} />
            </TouchableHighlight>
      <Tab.Navigator 
      
      initialRouteName="Boosters"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

            iconName = focused
              ? 'trending-up'
              : 'trending-up-outline';

  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0A5172',
        tabBarInactiveTintColor: 'gray',
        
        tabBarLabelStyle: {
          fontFamily: "Poppins_600SemiBold",
          fontSize: 11
        },
        tabBarStyle: {
          
        },
      })}
      >
        <Tab.Screen name="Home" component={Main} options={{ headerShown: false }}/>

      </Tab.Navigator>
      </AppearanceProvider>
    )
  }

  