import React from 'react';
/* import { NavigationContainer } from '@react-navigation/native'; */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import Home from '../../Screens/shop/Home';
import Product  from '../../Screens/shop/ProductsSelected';

import Details from '../../Screens/shop/Details';
// Data
import { Color } from '../../data/colors';
const Stack = createNativeStackNavigator();

const Navigator = ()=>{
    return(

            <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerStyle: {
                backgroundColor: Color.primary,
            }
        }}
        > 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
        name="Products" 
        component={Product}
        options={({ route }) => ({
            title: route.params.name,
        })}
        />
        <Stack.Screen name="Detail" component={Details} />
        </Stack.Navigator>
    

    )
};




export default Navigator;