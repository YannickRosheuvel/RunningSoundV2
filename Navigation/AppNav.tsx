import React, { useContext, useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import WelcomeStack from "./WelcomeStack";
import Navigate from "./Navigate";
import * as SecureStore from "expo-secure-store";
// import { AuthContext } from "../Context/AuthContext";






const AppNav = () => {

  const [loggedIn, setUser] = useState(null);

  // const { accessToken } = useContext(AuthContext);

  useEffect(() => {
GetUser();

}, [])



const GetUser = async () => {
  const user = JSON.parse(await SecureStore.getItemAsync("User"));
  setUser(user)
};

  return (
    <NavigationContainer>
      {null == null ? <WelcomeStack /> : <Navigate />}

    </NavigationContainer>
  );
};

export default AppNav;
