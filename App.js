import React, { Component } from 'react'

//redux
import { Provider } from 'react-redux'
import store from './redux/store'

import CategoryScreen from './screens/CategoryScreen'

export default class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <CategoryScreen/>
      </Provider>
    )
  }
}