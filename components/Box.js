import { Image, View, StyleSheet, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
import backgroundBox from '../assets/images/backgroundBox.svg'
import { useState } from 'react';
import Svg, { Circle } from 'react-native-svg';
import Running from '../assets/icons/Run/directions_run.svg'
import Time from '../assets/icons/Run/access_time.svg'
import Info from '../assets/icons/Run/info_outline.svg'
import * as React from 'react';


export default function Box() {

    const [level, setLevel] = useState(0)
    const [modalVisible, setModalVisible] = React.useState(false);

    const GiveAlert = () =>
    Alert.alert('BPM', 'BPM stands for Beats per Minute. Its the amount of beats you hear in a minute.', [

      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    return (
        <View style={styles.box}>

            <View style={styles.box2} >

                {/* <Image style={styles.iconProgress} source={require('../assets/icons/Run/directions_run.svg')} /> */}
                {/* <Image  source={require('../assets/icons/Run/directions_run.svg')} /> */}
                <View style={styles.iconWrapper}>
                    <Running fill="white" style={{ alignSelf: 'flex-start' }} />


                    <Text style={styles.progress}>Last Run</Text>
                </View>
                <View style={styles.columns}>
                    <View style={styles.column}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.columnTextBpm} >BPM</Text>
                            <TouchableOpacity onPress={() => GiveAlert()}>
                                <Info fill="white" style={{ width: 50, height: 50 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <Time fill="white" style={{ alignSelf: 'flex-start', width: 50, height: 50, }} />
                    </View>
                </View>
                <View style={styles.columns}>
                    <View style={styles.column}>
                        <Text style={styles.columnText}>170</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnText}>30min</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create(HomeStyles);