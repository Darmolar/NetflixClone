import { View, Text } from 'react-native'
import React from 'react'
import Home from '../views/dashboard/home';
import Profile from '../views/dashboard/profile';
import Search from '../views/dashboard/search';
import Details from '../views/dashboard/details';
import MyTabs from './bottomBar';

import { createStackNavigator } from '@react-navigation/stack';
 
const Stack = createStackNavigator();
const MyStacks = () => {
  return (
    <Stack.Navigator initialRouteName="MyTabs">
      {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} /> 
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />  */}

      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} /> 

      <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MyStacks