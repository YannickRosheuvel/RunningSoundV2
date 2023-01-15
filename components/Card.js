import { Image, TouchableHighlight, View, StyleSheet, Text } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
import Running from '../assets/icons/Run/directions_run.svg'
import Time from '../assets/icons/Run/access_time_Cards.svg'

export default function Card(props) {
    return (
        <View styles={styles.container1}>
            <TouchableHighlight onPress={props.click} style={styles.touch}>

            <View style={styles.card} >

                {/* <Image style={styles.iconProgress} source={require('../assets/icons/Run/directions_run.svg')} /> */}
                {/* <Image  source={require('../assets/icons/Run/directions_run.svg')} /> */}

                <View style={styles.columnsCard}>
                    <View style={styles.columnCard}>
                        <Text style={styles.columnTextCardBpm}>BPM</Text>
                    </View>
                    <View style={styles.columnCard}>
                        <Time fill="white" style={{ alignSelf: 'flex-start', width: 50, height: 50, }} />
                    </View>
                </View>
                <View style={styles.columnsCard}>
                    <View style={styles.columnCard}>
                        <Text style={styles.columnTextCard}>170</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnTextCard}>30min</Text>
                    </View>
                </View>
            </View>

            </TouchableHighlight>
            {/* <View style={styles.imageText}>
                <Text>YOOOO</Text>

            </View> */}

        </View>
    )
}

const styles = StyleSheet.create(HomeStyles);