
import AsyncStorage  from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer=(state,action) => {
  
    switch(action.type){
        case 'add_error':
            return{...state,errorMessage:action.payload};
         case 'clear_error_message':
            return{...state,errorMessage:''}; 
        case 'signup':
                return{errorMessage:'',token:action.payload};
        case 'signin':
                return{errorMessage:'',token:action.payload};
        default:
            return state;
    }
    
};

const clearErrorMessage  = dispatch => ()=>{
    dispatch({type:"clear_error_message"});
};

const signup = (dispatch) => async ({email, password})=> {
        try
        {
            const response = await trackerApi.post('/signup',{email, password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signup',payload:response.data.token});

        }
        catch(err)
        {
            dispatch({type:'add_error',payload:'Something went wrong with sign up'});
        }
    };


const signin = (dispatch) => async ({email,password})=>
{
        try
        {
            const response = await trackerApi.post('/signin',{email, password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token});

        }
        catch(err)
        {
            dispatch({type:'add_error',payload:'Something went wrong with sign in'});
        }
    
}

const signout = (dispatch) =>
{
    return ()=>{
        
    };
}


const tryLocalSignin = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token');
    if(token)
    {
        dispatch({type:'signin',payload:token});
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup,clearErrorMessage,tryLocalSignin },
    {token:null,errorMessage:''}
);