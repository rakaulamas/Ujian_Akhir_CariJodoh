import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../page/Home';
import Register from '../page/Register';
import { Login } from '../page/Login';

const Stack = createStackNavigator();

export class Router extends Component {
  
  render() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    )
  }
}

export default Router