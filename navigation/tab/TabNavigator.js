import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
// Navigators

import Navigator from '../shop/Navigator';
import CartNavigator from '../cart/CartNavigation';


const BottomTabs = createBottomTabNavigator();

const TabNavigator = ()=>{
    return(
        <NavigationContainer>
             <BottomTabs.Navigator 
        initialRouteName="Shop"
       /*  screenOptions={{
            tabBarStyle: { position: 'absolute' },
          }} */
        >
            <BottomTabs.Screen name="Shop" component={Navigator} />
            <BottomTabs.Screen  name="Carrito" component={CartNavigator} />
        </BottomTabs.Navigator> 
        </NavigationContainer>
       
)};

export default TabNavigator;