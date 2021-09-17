import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
/* import { Products } from '../data/products';
import { Categories } from '../data/data'; */

const CardProduct = ({item}) => {
    /* const selectedCategory = Categories.a(); */
    
    return (
        <TouchableOpacity style={styles.container}>
            <MaterialCommunityIcons name="piano" size={130} color="black" />
            <Text style={styles.textProduct}>{item.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: Dimensions.get('window').width / 2,
        /* height: '130%', */
        maxWidth: '98%',
        minWidth: 300,
        padding: 10,
        backgroundColor: 'grey',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.30,
        borderColor: 'solid',
        marginBottom: 10,
    },
    textProduct: {
        color: 'black',
    }
});

export default CardProduct;