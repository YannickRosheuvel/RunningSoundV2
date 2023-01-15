import { StyleSheet, Text, SafeAreaView, Image, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import arrow from '../assets/icons/Arrow.svg'
import backgroundWork from '../assets/images/backgroundWork.svg'
// import CircularProgress from 'react-native-circular-progress-indicator';
import avatar from '../assets/images/avatar.svg'
import replay from '../assets/icons/replay.svg'
import { WorkStyle } from '../assets/styles/WorkStyle';
import { useState } from 'react';
import Counter from '../components/Counter';
import SoundPlay from '../components/SoundPlay';
import { HomeStyles } from '../assets/styles/HomeStyles';
import { useEffect } from 'react';
import * as SecureStore from "expo-secure-store";
import { MyTabs } from '../Navigation/MyTabs';
import React from "react";
import { R1, R2, R3 } from "../components/ProgressBar/Constants";
import Animated, { Easing } from "react-native-reanimated";
import { runTiming } from "react-native-redash";
import CircularProgress from 'react-native-circular-progress-indicator';
// import GradientShader from "./GradientShader";
// import AngularGradient from "../components/AngularGradient";

// import ProgressCircle from 'react-native-progress-circle'
// import CircularProgress from 'react-native-circular-progress-indicator';


export default function Insights({ navigation }) {
    const [actualSteps, setSteps] = useState("");
    const [avg, setAvg] = useState("");
    const [isLoading, setLoading] = useState(true);


    // const { steps } = navigation.params;


    const NavigateHome = () => {
        navigation.navigate('Tabs')
    }


    const CalcAvg = () => {

        try {
            if (actualSteps != null) {
                const avg = 100 / actualSteps;
                setAvg(avg)
            }
            else {
                setAvg(0)
            }
        } catch (error) {
            console.log("Avg could not be calculated");
        }
    }



    useEffect(() => {
        const test = GetSteps();
        setSteps(test)
        console.log(actualSteps)
        // CalcAvg();
    }, []);
    


    // const extractNumber = (string) => {
    //     const number = parseInt(string.replace(/\D/g, ''));
    //     return number;
    // }


    const GetSteps = async () => {
        try {
            setLoading(true); // set loading state to true
            const steps = await SecureStore.getItemAsync("Steps");
;
            setLoading(false); // set loading state to false when data is retrieved
            // extractNumber(steps)
            setSteps(steps)
            console.log(steps)
        } catch (error) {
            console.log("Error retrieving steps: ", error);
        }
    }
    // const getSteps = async () => {

    //     setSteps(stepsInput);
    // }


    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <>

            <TouchableHighlight onPress={NavigateHome} style={styles.touchArrow}>
                <Image style={styles.arrow} source={arrow} />
            </TouchableHighlight>
            {/* <Image style={styles.avatar} source={avatar} /> */}
            <Text style={styles.title}>Insights</Text>
            <Counter />
            <Text style={styles.task}>Steps per minute</Text>
            <Text style={styles.Steps}>Target: 170  </Text>

            {/* <Text style={styles.timer}>Avg: {actualSteps}</Text> */}
            {/* <CircularProgress
                width={400}
                height={400}

                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                progressValueColor={'#fff'}
                valueSuffix={'%'}
                onAnimationComplete={() => { alert('callback') }}
            /> */}
            <CircularProgress
                value={actualSteps}
                radius={75}
                progressValueColor={'#fff'}
                duration={5000}
                strokeColorConfig={[
                    { color: 'red', value: 0 },
                    { color: 'skyblue', value: 50 },
                    { color: 'yellowgreen', value: 100 },
                ]}
            />
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 100,
                    borderRadius: 30,
                    marginVertical: 10,
                    backgroundColor: '#1ED6FF',
                    padding: 15,
                    borderRadius: 5,
                    position: 'absolute',
                    bottom: 50
                }}

                onPress={NavigateHome}
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
                }}>Finish Track</Text>
            </TouchableOpacity>

                </>
            )}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create(WorkStyle);
