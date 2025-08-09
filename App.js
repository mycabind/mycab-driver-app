/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome , CreateAccount,SignIn, NewPass,VerifyOtp,Profile} from './src/screens/auth'
import { SafeAreaView } from 'react-native';
import Home from './src/screens/home/Home';




const App = () => {
  const Stack = createNativeStackNavigator(); 
  return ( 
    <NavigationContainer>            
      <Stack.Navigator initialRouteName='CreateAccount' screenOptions={{headerShown: false}}>
        <Stack.Screen name='CreateAccount' component={CreateAccount}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='VerifyOtp' component={VerifyOtp}/>
        <Stack.Screen name='NewPass' component={NewPass}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 
