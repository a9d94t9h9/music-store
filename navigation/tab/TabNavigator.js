import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';
/* import { NavigationContainer } from '@react-navigation/native'; */
// Navigators

import Navigator from '../../navigation/shop/Navigator';
import CartNavigator from '../../navigation/cart/CartNavigation';


const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
    return(
  
      <Tab.Navigator 
         screenOptions={
          {headerShown:  false,
           tabBarStyle: {...styles.shadow}
          }
        }
        >
            <Tab.Screen 
            options = {{
              tabBarIcon: ()=>{
                <View>
                  <Entypo name="shop" size={24} color="black" />
                </View>
              }
            }}
            name="Shop" 
            component={Navigator} />
            <Tab.Screen  name="Carrito" component={CartNavigator} />
        </Tab.Navigator> 
)};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: 'red',
  }
});

export default TabNavigator;