import { Image, TouchableHighlight, View, StyleSheet, Text } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
import Running from '../assets/icons/Run/directions_run.svg'
import Time from '../assets/icons/Run/access_time_Cards.svg'
import MoreTime from '../assets/icons/Run/more_time.svg'

export default function CreateRun(props) {
    return (
        <View styles={styles.container1}>
            <TouchableHighlight onPress={props.click} style={styles.touch}>

            <View style={styles.card} >

{/* <View style={styles.columnsCard}>
<MoreTime style={styles.icon} />

        <Text style={styles.createRun}>Create Run</Text>



</View> */}
            <View style={styles.box3} >
<View style={styles.iconWrapper}>
<MoreTime style={styles.icon} />

                    <Text style={styles.createRun}>Create Run</Text>
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