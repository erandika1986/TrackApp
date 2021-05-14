import React,{useState} from "react";
import {StyleSheet } from "react-native";
import { Text,Input,Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({headerText,errorMessage,onSubmit,submitButtonText}) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
         <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>

            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                label="Email" 
                value={email}
                onChangeText={setEmail}
                
            />
            <Spacer/>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry 
                label="Password" 
                value={password}
                onChangeText={setPassword}
            />
            {errorMessage? <Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ email, password })}></Button>
            </Spacer>
        
        </>
    )

};

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
    },
    link:{
        color:'blue'
    }
});

export default AuthForm;