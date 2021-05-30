import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Router from './src/Router/Router'

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    )
  }
}

export default App
