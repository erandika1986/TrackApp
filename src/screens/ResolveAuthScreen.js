import React,{useContext,useEffect} from "react";
import {  View,StyleSheet } from "react-native";
import { exp } from "react-native-reanimated";
import { Context as AuthContext } from "../context/authContext";

const ResoveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(()=>{
        tryLocalSignin();
      },[]);
      
    return null;
};

export default ResoveAuthScreen;