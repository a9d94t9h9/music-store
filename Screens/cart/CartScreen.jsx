import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import  CardItemCart from '../../components/CardItemCart';
const CartScreen = ()=>{
    
    const items = useSelector(state => state.cart.items);
    const render = (data)=>{
        return(
            <CardItemCart item={data.item} />
        )
    };
    return (
        <View style={styles.conatiner}>
           <FlatList
             data={items}
             keyExtractor={ (item) => item.id}
             renderItem={render}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'center',
        width: '100%',
        flex: 1,
       /*  paddingVertical: '10%' */
    }
});

export default CartScreen;