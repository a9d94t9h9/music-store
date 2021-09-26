import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { CartScreen } from '../../Screens/cart/CartScreen';
import { Color } from '../../data/colors';


const Stack = createNativeStackNavigator();

const CartNavigator = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator> 
       <Stack.Screen
        name="Carrito"
        component={Cart}
       />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default CartNavigator;