import { StyleSheet, Text, Image, SafeAreaView, TextInput, View, ScrollView, Button } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
import avatar from '../assets/images/avatar.svg'
// import runCard from '../assets/images/cards/runCard.svg'
// import powerliftingCard from '../assets/images/cards/powerliftingCard.svg'
// import pushUpsCard from '../assets/images/cards/pushUpsCard.svg'
import Card from '../components/Card';
import EmptyCard from '../components/EmptyCard';
import Box from '../components/Box';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from "expo-secure-store";
import { useEffect } from 'react';
import CreateRun from './CreateRun';

export default function Home({ }) {

    useEffect(() => {

        saveCount("Steps", "0")
    }, [])


    const saveCount = async (key, value1) => {
        try {
            console.log("yep")
            await SecureStore.setItemAsync(key, value1);
            const steps = await SecureStore.getItemAsync("Steps");
            console.log(steps)

        } catch (error) {
            console.log('Error saving to SecureStore:', error);
        }
    };

    const saveTime = async (key, value1) => {
        try {
            console.log("yep")
            console.log(value1 + key)
            time = await SecureStore.setItemAsync(key, value1);
            console.log(steps)

        } catch (error) {
            console.log('Error saving to SecureStore:', error);
        }
    };

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const NavigateRun = async () => {
        await saveTime("Time", "300")
        console.log("Worked")
        navigation.navigate('Run')
    }
    const NavigatePowerlifting = () => {
        navigation.navigate('Powerlifting')
    }
    const NavigatePushUps = () => {
        navigation.navigate('PushUps')
    }
    const NavigateCounter = () => {
        navigation.navigate('Counter')
    }
    const SoundPlayer = () => {
        navigation.navigate('SoundPlayer')
    }

    return (



        <SafeAreaView style={styles.container1}>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() =>
                        navigation.navigate('Profile', { name: 'Custom profile header' })
                    }
                />
            </View> */}

            <ScrollView style={styles.scroll}>


                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home!</Text>
                </View> */}


                <View style={styles.container}>
                    <Text style={styles.hello}>Hello,</Text>
                    <TextInput style={styles.input} placeholderTextColor="#FFFFFF" placeholder='Yannick' />
                    {/* <Image style={styles.avatar} source={avatar} /> */}
                    <Box />
                    <View style={styles.createList}>
                    <CreateRun click={NavigateRun} />



                        {/* <Card click={NavigateRun} source={runCard} />
            <Card click={NavigatePowerlifting} source={powerliftingCard} />
            <Card click={NavigatePushUps} source={pushUpsCard} /> */}
                    </View>
                    <Text style={styles.exercises}>Reccomended exercises</Text>
                    <View style={styles.cardList}>
                        <Card Text="HEREYYY" click={NavigateRun}>
                            {/* <View>
        <Text>This is the text inside my card</Text>
      </View> */}

                        </Card>

                        <Card click={NavigateRun} />
                        <Card click={NavigateRun} />
                        <Card click={NavigateRun} />
                        <Card click={NavigateRun} />
                        <Card click={NavigateRun} />
                        <Card click={NavigateRun} />
                        <EmptyCard click={NavigateRun} />
                        <EmptyCard click={NavigatePowerlifting} />
                        <EmptyCard click={NavigatePushUps} />

                        {/* <Card click={NavigateRun} source={runCard} />
            <Card click={NavigatePowerlifting} source={powerliftingCard} />
            <Card click={NavigatePushUps} source={pushUpsCard} /> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>



    );
}

const styles = StyleSheet.create(HomeStyles);


