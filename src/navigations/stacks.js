import { View, Text } from 'react-native'
import React from 'react'
import Home from '../views/dashboard/home';
import Profile from '../views/dashboard/profile';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const MyStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  )
}

export default MyStacks