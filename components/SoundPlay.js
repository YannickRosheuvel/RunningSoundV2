// import { HomeStyles } from '../assets/styles/HomeStyles';
// import { useEffect, useState } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { Audio } from 'expo-av';
// import { Platform } from 'react-native';

// export default function SoundPlay() {
//   const [sound, setSound] = useState(null);
//   const file = require('../assets/Sounds/Heartbeat_Loop.wav');
//   useEffect(async() => {
//      loopSound(file);

//   }, []);



//   async function loopSound(file) {
//     console.log('Loading Sound');
//     const sound = await Audio.Sound.createAsync( (file));
//     setSound(sound);
//     await sound.playAsync();
//     console.log('Playing Sound');
//     await sound.setOnPlaybackStatusUpdate((status) => {
//       if(status.didJustFinish){
//         sound.playAsync();
//       }
//     });
//   }

//   return (
//     <View style={styles.container}>
//     </View>
//   );
// }

// const styles = StyleSheet.create(HomeStyles);

import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
export const MyContext = React.createContext();

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const  {sound } = await Audio.Sound.createAsync( require('../assets/Sounds/5MinSound.wav')
    );
    setSound(sound);
    await sound.playAsync();
    console.log('Playing Sound');

  }

  const PlayHalfWay = async () => {



  }

  const PlayStart = async () => {



  }

  const PlayEnd = async () => {



  }


//   useFocusEffect(

//     React.useCallback(() => {
//         // console.log("screen is focused")
//         playSound();
//         return () => {

//           console.log('Unloading Sound');
//           sound.unloadAsync();
//         }

//     }, )
// );


React.useEffect(() => {
  playSound();
  return () => {
    console.log('Unloading Sound!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(sound)
    sound.unloadAsync();
  }
}, []);


  return (
<MyContext.Provider value={{sound}}>
<View >
</View>
</MyContext.Provider>
  );
}

