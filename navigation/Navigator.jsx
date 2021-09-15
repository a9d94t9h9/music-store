import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Product  from '../Screens/ProductsSelected';
import { Color } from '../data/colors';

const Stack = createNativeStackNavigator();

const Navigator = ()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerStyle: {
                backgroundColor: Color.primary,
                /* height: '170%', */
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
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigator;