import React, {useContext,useEffect} from "react";
import {  View,StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from '../components/AuthForm';
import NavLink from "../components/NavLink";

const SignUpScreen = ({navigation}) =>
{
    const { state, signup } = useContext(AuthContext);

    useEffect(
        () => navigation.addListener('blur', () => clearErrorMessage()),
        []
      ); 

    return(
        <View style={styles.container}>
            <AuthForm 
                headerText="sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({email,password})=>signup({email,password})}
            />
            <NavLink routeName="Signin" text="Already have an Account? Sign in instead"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        marginBottom:150
    },
    errorMessage:{
        fontSize:16,
        color:'red'
    }

});

export default SignUpScreen;