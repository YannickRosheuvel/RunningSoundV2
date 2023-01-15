import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import History from '../pages/History';
import Plus from '../assets/icons/Run/plus.svg'
import HistoryIcon from '../assets/icons/Run/file-text.svg'
import MyPageIcon from '../assets/icons/Run/saved-items.svg'

function HomeScreen() {
  return (
    <View style={{ flex: 1, }}>
      <Home></Home>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, }}>
      <History></History>
    </View>
  );
}

let Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
  tabBarOptions={{
    activeTintColor: '#FF7163',
    inactiveTintColor: '#FFFFFF',
    activeBackgroundColor: '#000000',
    inactiveBackgroundColor: '#000000',
    backgroundColor:'#000000',
    paddingBottom: 50,
    outerHeight:50,
        style: {
              backgroundColor: '#000000',
              paddingBottom: 0,
              left: 20,
              right : 20,
              outerHeight:30,
              paddingBottom:0,
        }
 }}

> 

      {/* <Tab.Screen name="CreateRun" component={History}
      options={{
        tabBarIcon: ({focused}) => (
          <Plus
          style={{

          }}
          />
        )
      }}/> */}

<Tab.Screen        name="MyPage"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MyPageIcon
            style={{
  
            }}
            />
          ),
          title: 'My page',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

         }}/>

      <Tab.Screen        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <HistoryIcon
            style={{
  
            }}
            />
          ),
          title: 'My history',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         }}/>

    </Tab.Navigator>
  );
}

