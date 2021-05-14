import React,{useState} from "react";
import {StyleSheet,Text,TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { useNavigation } from '@react-navigation/native';

const NavList  = ({text,routeName}) => {

    const navigation = useNavigation();

return (
    <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
    <Spacer>
        <Text style={styles.link}>{text}</Text>
    </Spacer>

    </TouchableOpacity>
);

};

const styles = StyleSheet.create({
    link:{
        color:'blue'
    }
});

export default NavList;

