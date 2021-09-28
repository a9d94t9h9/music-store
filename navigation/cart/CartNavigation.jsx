import React from 'react';
/* import { NavigationContainer } from '@react-navigation/native'; */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import  Cart  from '../../Screens/cart/CartScreen';
import { Color } from '../../data/colors';


const Stack = createNativeStackNavigator();

const CartNavigator = ()=>{
    return(
       
        <Stack.Navigator> 
       <Stack.Screen
        name="Carrito"
        component={Cart}
       />
        </Stack.Navigator>
  
    )
}

export default CartNavigator;