import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet ,
} from 'react-native';
import { MainStyles } from '../assets/styles/MainStyle';

function RegisterScreen({ styles }) {
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
  
  const registerUser = () => {
    // Register user logic here
  }
  const registerUser2 = () => {
    // Register user2 logic here
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

    

<View></View>
  );
}


const styles = StyleSheet.create(MainStyles);

export default RegisterScreen;

