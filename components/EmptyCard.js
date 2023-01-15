import { Image, TouchableHighlight, View, StyleSheet, Text } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';

export default function EmptyCard(props) {
    return (
        <View styles={styles.container1}>
            <TouchableHighlight onPress={props.click} style={styles.touch}>

                <View style={styles.cardEmpty} source={props.source}  >
                <Text style={styles.progress}></Text>
                </View>

            </TouchableHighlight>
            {/* <View style={styles.imageText}>
                <Text>YOOOO</Text>

            </View> */}

        </View>
    )
}

const styles = StyleSheet.create(HomeStyles);