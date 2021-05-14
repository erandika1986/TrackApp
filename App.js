import { StatusBar } from 'expo-status-bar';
import React, {useContext,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer ,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider,Context as AuthContext  } from "./src/context/authContext";
import ResoveAuthScreen from "./src/screens/ResolveAuthScreen";


const AuthStack = createStackNavigator();
function AuthStackScreen () {
  return ( <AuthStack.Navigator>
      <AuthStack.Screen name="Signup" component={SignupScreen} options={{
          headerShown: false, // change this to `false`
        }}/>
      <AuthStack.Screen name="Signin" component={SigninScreen} options={{
          headerShown: false, // change this to `false`
        }}/>
  </AuthStack.Navigator>)
}


const TaskStack = createStackNavigator();
function TaskStackFlow()  {
  return (<TaskStack.Navigator>
    <TaskStack.Screen name="TrackList" component={TrackListScreen}/>
    <TaskStack.Screen name="TrackDetail" component={TrackDetailScreen}/>
  </TaskStack.Navigator>);
}

const Tab = createBottomTabNavigator();
function MainFlow(){
  return(<Tab.Navigator  >
      <Tab.Screen name="Tasks" component={TaskStackFlow}/>
      <Tab.Screen name="TrackCreat" component={TrackCreateScreen}/>
      <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>)

};



function App({navigation}) {
  
/*   const { state, signup,tryLocalSignin } = useContext(AuthContext);

  useEffect(()=>{
    tryLocalSignin();
  },[]); */

  return (
    <NavigationContainer>
      {state.token==null? (<AuthStackScreen/>):(<MainFlow/>)}
  </NavigationContainer>
  );
}



export default ()=> {
  return <AuthProvider>
    <App/>
  </AuthProvider>
};

