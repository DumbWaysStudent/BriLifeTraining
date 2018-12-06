import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen
  }
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
