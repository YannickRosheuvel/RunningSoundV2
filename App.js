import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import Navigate from './Navigation/Navigate';
import AppNav from './Navigation/AppNav';
import { StyleSheet, Text, Image, SafeAreaView, TextInput, View } from 'react-native';


export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (

      <AppNav/>

    );
  }
};