/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mainpage from './source/pages/Mainpage';

const Stack = createStackNavigator();

const ParentComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Mainpage} options={{title: "Main Page", headerShown: false}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentComponent;
