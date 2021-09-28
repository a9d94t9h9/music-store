import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = ()=>{
    return (
        <View style={styles.conatiner}>
            <Text>Carrito!!!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'center',
        width: '100%'
    }
});

export default CartScreen;