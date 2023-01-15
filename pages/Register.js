import { StyleSheet, Text, Image, SafeAreaView, View, TextInput, handleInputChange, TouchableOpacity, handleSubmit, Linking, onPress, Alert } from 'react-native';
import { MainStyles } from '../assets/styles/MainStyle';
import React, { useContext, useState } from "react";
import backgroundImage from '../assets/images/BackgroundMain.svg';
import axios from 'axios';




// export default function Main({ navigation }) {
const Register = ({ navigation }) => {

    // let [time, setTime] = useState(60)
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [zip, setZip] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatpasswordError, setRepeatpasswordError] = useState('');


    const NavigateMain = () => {
        navigation.navigate('Main')
    }

    const NavigateHome = () => {
        navigation.navigate('Home')
    }

    const NavigationRegister = () => {
        navigation.navigate('RegisterScreen')
    }



    // Validate = () => {

    //     let emailError= '';
    //      let passwordError= '';
    //       let addressError= '';
    //        let firstNameError= '';
    //         let lastNameError= '';
    //         let usernameError= '';
    //         let repeatpasswordError= '';
    //     // if(this.state.password < =){
  
    //     // }
  
    //     if(!this.state.firstName.match(/^[a-zA-Z]+$/)){
    //       firstNameError = "can only contain letters"
    //     }
  
    //     if(!this.state.lastName.match(/^[a-zA-Z]+$/)){
    //       lastNameError = "can only contain letters"
    //     }
  
    //     if(this.state.password.length < 5){
    //       passwordError = "Password is not long enough"
    //     }
  
    //     if(this.state.password != this.state.repeatpassword){
    //       repeatpasswordError = "passwords do not match"
    //     }
  
    //     if (firstNameError || lastNameError || passwordError){
    //       this.setState({firstNameError});
    //       this.setState({lastNameError});
    //       this.setState({passwordError});
    //       this.setState({repeatpasswordError});
    //       return false;
    //     }
  
  
  
  
    //     if (lastNameError){
    //       this.setState({lastNameError});
    //       return false;
    //     }
  
    //     return true;
    //   }
  
      async function RegisterUser(){
        // const isValid = this.Validate();
  
        // if(isValid){
          console.log("hello")
          axios.post('https://localhost:44355/api/user/{id}/register', {username, firstName, lastName, address,
          password, email})
              .then(response =>
              {
                  if (response.data.id !== 0) {

                    Alert.alert(
                        'Warning',
                        'Login Succesfull',
                        [
                          {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                            style: 'cancel',
                          },
                        ],
                        { cancelable: false },
                      );
                      NavigateHome();
  
                  }
              console.log(response)
          })
              .catch(error => {
                  console.log(error)
                  Alert.alert(
                    'Warning',
                    'Login Unsuccesfull',
                    [
                      {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                      },
                    ],
                    { cancelable: false },
                  );
              })
              
        // }
        // else{
        //   alert("Check if you filled in the required fields correctly.")
        // }
  
      }


    return (
        // <SafeAreaView style={styles.container}>
        //   <View style={styles.container}>
        //     <View style={styles.inputContainer}>
        //       <Text style={styles.label}>Email</Text>
        //       <TextInput
        //         style={styles.input}
        //         onChangeText={text => setEmail(text)}
        //         value={email}
        //         placeholder='Enter your email'
        //         autoCapitalize='words'
        //         autoCorrect={false}
        //       />
        //       {emailError ? (
        //         <Text style={styles.error}
        //         >{emailError}</Text>
        //         ) : null}
        //       </View>

        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>First Name</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setFirstName(text)}
        //           value={firstName}
        //           placeholder='Enter your first name'
        //           autoCapitalize='words'
        //           autoCorrect={false}
        //         />
        //         {firstNameError ? (
        //           <Text style={styles.error}>{firstNameError}</Text>
        //         ) : null}
        //       </View>

        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>Last Name</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setLastName(text)}
        //           value={lastName}
        //           placeholder='Enter your last name'
        //           autoCapitalize='words'
        //           autoCorrect={false}
        //         />
        //         {lastNameError ? (
        //           <Text style={styles.error}>{lastNameError}</Text>
        //         ) : null}
        //       </View>

        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>Zip</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setZip(text)}
        //           value={zip}
        //           placeholder='Enter your zip code'
        //           autoCapitalize='words'
        //           autoCorrect={false}
        //         />
        //       </View>
        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>Address</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setAddress(text)}
        //           value={address}
        //           placeholder='Enter your address'
        //           autoCapitalize='words'
        //           autoCorrect={false}
        //         />
        //       </View>

        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>Username</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setUsername(text)}
        //           value={username}
        //           placeholder='Enter your username'
        //           autoCapitalize='words'
        //           autoCorrect={false}
        //         />
        //       </View>

        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>Password</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setPassword(text)}
        //           value={password}
        //           placeholder='Enter your password'
        //           autoCapitalize='words'
        //           autoCorrect={false}
        //         />
        //         {passwordError ? (
        //           <Text style={styles.error}>{passwordError}</Text>
        //         ) : null}
        //       </View>

        //       <View style={styles.inputContainer}>
        //         <Text style={styles.label}>Repeat Password</Text>
        //         <TextInput
        //           style={styles.input}
        //           onChangeText={text => setRepeatPassword(text)}
        //           value={repeatPassword}
        //           placeholder='Enter your password again'
        //           autoCapitalize='words'
        //         autoCorrect={false}
        //       />
        //       {repeatpasswordError ? (
        //         <Text style={styles.error}>{repeatpasswordError}</Text>
        //       ) : null}
        //     </View>

        //     <TouchableOpacity
        //       style={styles.button}
        //       onPress={registerUser}
        //     >
        //       <Text style={styles.buttonText}>Register</Text>
        //     </TouchableOpacity>
        //      <TouchableOpacity
        //       style={styles.button}
        //       onPress={registerUser2}
        //     >
        //       <Text style={styles.buttonText}>registerUser2</Text>
        //     </TouchableOpacity>
        //   </View>
        // </SafeAreaView>

        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Register</Text>
            {/* <Image style={styles.background} source={backgroundImage} /> */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email address</Text>
                <TextInput
                    testID="email"
                    keyboardType="email-address"
                    onChangeText={newEmail => setEmail(newEmail)}
                    name="emailadress"
                    style={styles.input}
                />
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={fName => setFirstName(fName)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setLastName(newText)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.label}>Zip Code</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setZip(newText)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.label}>Adress</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setAddress(newText)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.label}>Username</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setUsername(newText)}
                    name="password"
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
                <Text style={styles.label}>Repeat password</Text>
                <TextInput
                    testID="password"
                    secureTextEntry={true}
                    onChangeText={newText => setRepeatPassword(newText)}
                    name="password"
                    style={styles.input}
                />
                <Text style={styles.hint}>We'll never share your email with anyone else.</Text>
                <TouchableOpacity
                    testID="loginButton"
                    onPress={RegisterUser}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID="loginButton"
                    onPress={NavigateMain}
                    style={styles.registerButton}
                >   
                    <Text style={styles.submitButtonText}>Back</Text>
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

export default Register;