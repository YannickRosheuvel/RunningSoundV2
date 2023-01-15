// import React, { useEffect, useState } from "react";

// import { StatusBar } from "expo-status-bar";

// import {

//  StyleSheet,

//  Text,

//  View,

//  ImageBackground,

//  Dimensions,

// } from "react-native";

// import { Pedometer } from "expo-sensors";

// // import CircularProgress from "react-native-circular-progress-indicator";



// export default function App() {

//  const [PedomaterAvailability, SetPedomaterAvailability] = useState("");

//  const [StepCount, SetStepCount] = useState(0);



//  var WindowHeight = Dimensions.get("window").height;



//  var Dist = StepCount / 1300;

//  var DistanceCovered = Dist.toFixed(4);



//  var cal = DistanceCovered * 60;

//  var caloriesBurnt = cal.toFixed(4);

//  React.useEffect(() => {

//    subscribe();

//  }, []);



//  subscribe = () => {

//    const subscription = Pedometer.watchStepCount((result) => {

//      SetStepCount(result.steps);

//    });



//    Pedometer.isAvailableAsync().then(

//      (result) => {

//        SetPedomaterAvailability(String(result));

//      },

//      (error) => {

//        SetPedomaterAvailability(error);

//      }

//    );

//  };



//  return (

//    <View style={styles.container}>




//        <View style={{ flex: 1, justifyContent: "center" }}>

//          <Text style={styles.headingDesign}>

//            Is Pedometer available on the device : {PedomaterAvailability}

//          </Text>

//        </View>

//        <View style={{ flex: 3 }}>

//          {/* <CircularProgress

//            value={StepCount}

//            maxValue={6500}

//            radius={210}

//            textColor={"#ecf0f1"}

//            activeStrokeColor={"#f39c12"}

//            inActiveStrokeColor={"#9b59b6"}

//            inActiveStrokeOpacity={0.5}

//            inActiveStrokeWidth={40}

//            activeStrokeWidth={40}

//            title={"Step Count"}

//            titleColor={"#ecf0f1"}

//            titleStyle={{ fontWeight: "bold" }}

//          /> */}

//        </View>



//        <View style={{ flex: 1, justifyContent: "center" }}>

//          <View style={{ flex: 1 }}>

//            <Text

//              style={[

//                styles.textDesign,

//                { paddingLeft: 20, marginLeft: '23%' },

//              ]}

//            >

//              Target : 6500 steps(5kms)

//            </Text>

//          </View>



//          <View style={{ flex: 1 }}>

//            <Text

//              style={[

//                styles.textDesign,

//                { width: "93%", paddingLeft: 20, marginLeft: '-3.5%' },

//              ]}

//            >

//              Distance Covered : {DistanceCovered} km

//            </Text>

//          </View>



//          <View style={{ flex: 1 }}>

//            <Text

//              style={[

//                styles.textDesign,

//                {  paddingLeft: 10, marginLeft: '23%' },

//              ]}

//            >

//              Calories Burnt : {caloriesBurnt}

//            </Text>

//          </View>



//          <StatusBar style="auto" />

//        </View>


//    </View>

//  );

// }



// const styles = StyleSheet.create({

//  container: {

//    flex: 1,

//    backgroundColor: "#fff",

//  },

//  headingDesign: {

//    backgroundColor: "rgba(155, 89, 182,0.5)",



//    alignSelf: "center",

//    fontSize: 20,

//    color: "white",

//    fontWeight: "bold",

//    fontFamily: "Papyrus",

//  },

//  textDesign: {

//    backgroundColor: "rgba(155, 89, 182,0.5)",

//    height: 50,

//    width : '85%',

//    borderColor: "white",

//    borderWidth: 1,

//    borderRadius: 20,

//    overflow: "hidden",

//    fontSize: 25,

//    color: "white",

//    fontWeight: "bold",

//    fontFamily: "Papyrus",

//  },

// });

import { HomeStyles } from '../assets/styles/HomeStyles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import Card from './Card'
import * as SecureStore from "expo-secure-store";

export default class App extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  };



  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  // function save(key, value) {
  //   await SecureStore.setItemAsync(key, value);
  // }

  saveCount = async ({ key, value1 }) => {
    try {
      console.log(value1+ "Bitch")
      console.log("Calc Steps...")
      await SecureStore.setItemAsync("Steps", JSON.stringify(value1));
      console.log(this.state.currentStepCount)
      const steps = JSON.parse(await SecureStore.getItemAsync("Steps"));
      console.log(steps + "Secure")

    } catch (error) {
      console.log('Error saving to SecureStore:', error);
    }
  };





  _subscribe = async () => {

    console.log("Subscribe")
    await this.saveCount({ key: "Steps", value1: this.state.currentStepCount })

    this._subscription = Pedometer.watchStepCount(result => {

      this.setState({

        currentStepCount: result.steps,


      });



      console.log(this.state.currentStepCount.toString())
      this.saveCount({ key: "Steps", value1: this.state.currentStepCount })

    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.StepCounter}>
        {/* <Text>Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}</Text>
        <Text>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text> */}
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(HomeStyles);