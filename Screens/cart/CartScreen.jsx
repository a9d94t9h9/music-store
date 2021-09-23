import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cart = ()=>{
    return (
        <View style={styles.conatiner}>
            <Text>Carrito!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'center',
    }
});

export default Cart;