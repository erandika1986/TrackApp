import React,{useContext,useEffect} from "react";
import {  View,StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from '../components/AuthForm';
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) =>
{

    const {state,signin,clearErrorMessage} = useContext(AuthContext);

     useEffect(
        () => navigation.addListener('blur', () => clearErrorMessage()),
        []
      ); 
    return(
        <View style={styles.container}>
            <AuthForm 
                headerText="sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={({email,password})=>signin({email,password})}
            />
            <NavLink routeName="Signup" text="Don't have an Account? Sign up instead"/>
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

export default SigninScreen;