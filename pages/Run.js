import { StyleSheet, Text, SafeAreaView, Image, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import arrow from '../assets/icons/Arrow.svg'
import backgroundWork from '../assets/images/backgroundWork.svg'
import avatar from '../assets/images/avatar.svg'
import replay from '../assets/icons/replay.svg'
import { WorkStyle } from '../assets/styles/WorkStyle';
import { useState } from 'react';
import Counter from '../components/Counter';
import SoundPlay from '../components/SoundPlay';
import { HomeStyles } from '../assets/styles/HomeStyles';
import { createContext } from 'react';
import { useEffect, useContext } from 'react';
import * as SecureStore from "expo-secure-store";
import Insights from './Inights';
import { useFocusEffect } from '@react-navigation/native';
import React from "react";
import CircularProgress from 'react-native-circular-progress-indicator';
import Beginning from '../assets/Sounds/VoiceCues/TheEnd.mp3'
import Halfway from '../assets/Sounds/VoiceCues/TheEnd.mp3'
import End from '../assets/Sounds/VoiceCues/TheEnd.mp3'
import { Audio } from 'expo-av';

// import { MyContext } from '../components/SoundPlay'; 
import { MyContext } from '../components/SoundPlay';


export default function Run({ navigation }) {
    const [steps, setSteps] = useState("");
    const context = useContext(MyContext)
    let interval;
    let [timeOut, setInitTimeOut] = useState(30);
    const [timeInit , setInitTime] = useState(30);
    const [playSound, setPlaySound] = useState(true);
    const sound = context


    const NavigateHome = () => {

        navigation.navigate('Home');
    }

    const GetTime = async () => {

        console.log("nope")
        const time = JSON.parse(await SecureStore.getItemAsync("Time"));
        console.log(time)
        return time;

        // console.log(stepsInput + "RUN")

    }

    
    const PlayHalfWay = async () => {


            console.log('Loading Halfway');
            const  {sound } = await Audio.Sound.createAsync( require('../assets/Sounds/VoiceCues/Halfway.mp3')
            );
            await sound.playAsync();
            console.log('Playing Sound');
        
 

    }

    const PlayStart = async () => {


            console.log('Loading Start');
            const  {sound } = await Audio.Sound.createAsync( require('../assets/Sounds/VoiceCues/TrackStarting.mp3')
            );
            await sound.playAsync();
            console.log('Playing Sound');
        


    }

    const PlayEnd = async () => {


            console.log('Loading End');
            const  {sound } = await Audio.Sound.createAsync( require('../assets/Sounds/VoiceCues/TheEnd.mp3')
            );
            await sound.playAsync();
            console.log('Playing Sound');
        


    }

    const [time, setTime] = useState(30);
    const [initTime, setinitTime] = useState(time);


    const NavigateInsights = () => {
        clearInterval(interval);
        clearTimeout(timeOut);
        setPlaySound(false)
        // sound.unloadAsync();

        navigation.navigate('Insights');
    }

    // useEffect(() => {
    //     interval = setInterval(() => {
    //         if (time > 0) {
    //             setTime(time - 1);
    //         } else {
    //             clearInterval(interval);
    //             // navigation.navigate('Insights');
    //         }
    //     }, 1000);
    //     return () => {
    //         console.log("yoo")
    //         clearInterval(interval)

    //     }


    // }, [time]);

    useFocusEffect(

        React.useCallback(() => {
            // console.log("screen is focused")
            interval = setInterval(() => {
                if (time > 0) {
                    console.log(sound)
                    GetSteps()
                    // saveData("Steps", steps)
                    if(time === timeInit){
                        PlayStart()
                    }
                    if(time === timeInit / 2){
                        PlayHalfWay()
                    }

                    setTime(time - 1);
                } else {
                    PlayEnd()
                    clearInterval(interval);
                    NavigateInsights();
                }
            }, 1000);
            return () => {
                clearInterval(interval)

            }

        }, [time])
    );

    const GetSteps = async () => {

        const steps = await SecureStore.getItemAsync("Steps");
        console.log("nope" + steps)
        setSteps(steps);
        console.log("nope" + steps)
    }


    const saveData = async (key, value) => {
        try {
            const steps = await SecureStore.setItemAsync(key, value);

            console.log('Data saved successfully!' + steps);
        } catch (error) {
            console.log('Error saving data: ', error);
        }
    };

    const replayTimer = () => {
        if (time === 0) {
            setTime(time = 30);
        }
    }

    // const saveCount = async ({ key, value1 }) => {
    //     try {
    //         console.log(steps + "Bitch")
    //         console.log("Calc Steps...")
    //         await SecureStore.setItemAsync("Steps", JSON.stringify(steps));
    //         console.log(steps)
    //         const uploadedSteps = JSON.parse(await SecureStore.getItemAsync("Steps"));
    //         console.log(uploadedSteps + "Secure")

    //     } catch (error) {
    //         console.log('Error saving to SecureStore:', error);
    //     }
    // };

    // const getSteps = async () => {

    //     setSteps(stepsInput);
    // }


    return (

        <MyContext.Provider>

        <SafeAreaView style={styles.container}>
        
            <SoundPlay/>
            {/* 
            <TouchableHighlight onPress={NavigateHome} style={styles.touchArrow}>
                <Image style={styles.arrow} source={arrow} />
            </TouchableHighlight> */}
            {/* <Image style={styles.avatar} source={avatar} /> */}
            <Text style={styles.title}>Run {sound}</Text>
            <Counter />
            <Text style={styles.task}>Task 100m</Text>
            <Text style={styles.Steps}>Steps: {steps} </Text>
            <CircularProgress
                value={time}
                radius={140}
                maxValue={30}
                initialValue={time}
                progressValueColor={'#fff'}
            >
            </CircularProgress>
            {/* 
            <Text style={styles.timer} onChange={setTime}>{time}s</Text> */}



            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 100,
                    borderRadius: 30,
                    marginVertical: 10,
                    backgroundColor: '#F63333',
                    padding: 15,
                    borderRadius: 5,
                    position: 'absolute',
                    bottom: 50,
                }}

                onPress={NavigateInsights}
            >
                <Text style={{
                    fontSize: 24,
                    position: 'absolute',
                    top: 30,
                    // left: 20,
                    alignSelf: 'center',
                    fontFamily: 'Ubuntu_500Medium',
                    fontWeight: 'bold',
                    color: '#FFFFFF'
                }}>STOP</Text>
            </TouchableOpacity>
        </SafeAreaView>
        </MyContext.Provider>
    );
}



const styles = StyleSheet.create(WorkStyle);
