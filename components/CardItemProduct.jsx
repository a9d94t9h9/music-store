import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CardProduct = ({item, handleDetail}) => {
   
    
    return (
        <TouchableOpacity style={styles.container} onPress={()=>handleDetail(item)} >
            <MaterialCommunityIcons name="piano" size={130} color="black" />
           <View style={styles.textContainer}>
           <Text style={styles.textProduct}>{item.name}</Text>
           <Text style={styles.textPrice}>{item.price}</Text>
           </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '95%',
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
        fontWeight: '600',
        maxWidth: '80%',
    },
    textPrice : {
        color: 'black',
        fontWeight: '800'
    },
    textContainer: {
        textAlign: 'center',
        padding: 5,
        alignItems: 'center'
    } 
});

export default CardProduct;