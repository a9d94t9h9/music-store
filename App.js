import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { Provider } from 'react-redux';
import store from './store/store';
import  MainNavigator  from './navigation/MainNavigator';
import Navigator from './navigation/shop/Navigator';


// <Navigator />
export default function App() {
  return (
   <Provider store={store} >
      <View style={styles.container}>
      
       <MainNavigator/>
      
      <StatusBar style="auto" />
    </View>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    /* alignItems: 'center', */
    textAlign: 'center',
    width:'100%',
   /*  justifyContent: 'center', */
  },
});
