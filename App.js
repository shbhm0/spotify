import React from 'react'
import {View,Text,StyleSheet, Platform} from 'react-native'
// import HomeScreen from './src/screen/Homescreen'
// import SignIn from './src/screen/signin'
import Router from './src/screen/router'
// import Bottom from './src/screen/bottomtab'
// import Album from './src/customs/album'
// import Search from './src/customs/seachItems'
// import DOB from './src/screen/DOB'
// import Language from './src/screen/Language'
import {persistor,store} from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import Player from './src/screen/player'
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router/>
          </PersistGate> 
      </Provider>
    )
  }
}
const styles=StyleSheet.create({
  conatainer:{
    flex:1
  }
})