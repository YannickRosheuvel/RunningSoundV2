import { StyleSheet, Text, Image, SafeAreaView, View, TextInput, handleInputChange, TouchableOpacity, handleSubmit, Linking , onPress} from 'react-native';
import { MainStyles } from '../assets/styles/MainStyle';
import React, { useContext, useState } from "react";
import backgroundImage from '../assets/images/BackgroundMain.svg';
import axios from 'axios';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
// import { runTiming } from "react-native-redash";



// export default function Main({ navigation }) {
const Main = ({ navigation }) => {

    // let [time, setTime] = useState(60)
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [courseCount, setCourseCount] = useState(0);
    const [emailadress, setEmailadress] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState(null);


    const NavigateHome = () => {
        navigation.navigate('Home')
    }

    const NavigationRegister = () => {
        navigation.navigate('RegisterScreen')
    }


    const Navregister = () => {
        navigation.navigate('Register')
    }

    const saveData = async (key, value) => {
        try {
          await SecureStore.setItemAsync(key, value);
          console.log('Data saved successfully!');
        } catch (error) {
          console.log('Error saving data: ', error);
        }
      };
    


    async function handleSubmit(token, expoToken){
        // event.preventDefault();
        // console.log("hello")
        // axios.post('https://localhost:44355/api/course')
        //     .then(response => {
        //         if (response.data.id !== 0) {
        //             localStorage.setItem('user', response.data.id);
        //             alert("Login succesfull!")
        //             console.log("Yay")
        //             this.props.history.push('./')
        //             NavigateHome();
        //         }
        //         else {
        //             console.log("Yay")
        //             alert("login failed, please try again.")
        //         }
        //         console.log("response")
        //     })
        //     .catch(error => {
        //         console.log("error")
        //     })
        // }
        login();
        setAccessToken("Yannick");
        await saveData("User", "Yannick");

            // const res = await fetch('https://localhost:44355/api/user/' + "2" +'/login' +  { emailadress: emailadress, password: password}, {
            //     method: 'POST',
            //     headers: {
            //       'Accept': 'application/json',
            //       'Content-Type': 'application/json',
            //       'Authorization': `Bearer ${ token }`,
            //     },
            //   });
  

            //     var response = await axios.get("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json", {
            //     });
            //     console.log(response.data);
            //     return response.data;
            // }
            

NavigateHome();
    }


    // async function handleInputChange(variable) {
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     })
    //     if()
    //     console.log(event.target.value)
    // }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            {/* <Image style={styles.background} source={backgroundImage} /> */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email address</Text>
                <TextInput
                    testID="email"
                    keyboardType="email-address"
                    onChangeText={newEmail => setEmailadress(newEmail)}
                    name="emailadress"
                    style={styles.input}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setPassword(newText)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.hint}>We'll never share your email with anyone else.</Text>
                <TouchableOpacity
                    testID="loginButton"
                    onPress={handleSubmit}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID="loginButton"
                    onPress={Navregister}
                    style={styles.registerButton}
                >
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.registerButton}
                >
                    <Text style={styles.registerButtonText} onPress={Navregister}>Register</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    testID="loginButton"
                    onPress={Navregister()}
                    style={styles.registerButton}
                >
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
}





const styles = StyleSheet.create(MainStyles);

export default Main;