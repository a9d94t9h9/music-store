import React from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* , handleDetail */
const CardItemCart = ({item}) => {
   
    
    return (
        
          <View style={styles.container}>
            <MaterialCommunityIcons name="piano" size={50} color="black" />
           <View style={styles.textContainer}>
           <Text style={styles.textProduct}>{item.name}</Text>
           <Text style={styles.textPrice}>{item.price}</Text>
           </View>
          </View>
      
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        /* maxWidth: '98%', */
        minWidth: 300,
        height: '85%',
        padding: 10,
        backgroundColor: 'grey',
        /* shadowColor: 'black',
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.30, */
        borderColor: 'solid',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    textProduct: {
        color: 'black',
        fontWeight: '600',
        maxWidth: '80%',
    },
    textPrice : {
        color: 'black',
        fontWeight: '700'
    },
    textContainer: {
        textAlign: 'center',
        padding: 5,
        alignItems: 'center'
    } 
});

export default CardItemCart;