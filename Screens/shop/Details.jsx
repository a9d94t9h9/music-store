import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import {  selectedProduct } from '../../store/actions/products.action';
import  addItem  from '../../store/actions/cart-action';
/* showsHorizontalScrollIndicator = {false} */
const Details = ()=>{
    const productID = useSelector(state => state.products.selectedID);
    const products = useSelector(state => state.products.list);
    const product = products.find(item => item.id === productID);
    const img = useSelector(state => state.images.list);
    const dispatch = useDispatch();

    const handlePressAddCart = ()=>{
        dispatch(addItem(product));
    }
    return(
        <View style={styles.container} >
            <FlatList
             data={img}
             keyExtractor={ (item) => item.id}
             horizontal
             pagingEnabled
             scrollEnabled
             snapToAlignment='center'
             scrollEventThrottle = {16}
             decelerationRate={'fast'}
             
             renderItem={({item})=>{
                 return(
                    <Image style={styles.img} source={item.id} />
                 )
             }}

            />
            <Text>{product.name}</Text>
            <Button
            icon={
                <AntDesign 
                name="shoppingcart" 
                size={24} 
                color="black"
                 />
            }
            onPress={handlePressAddCart}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 220,
    },
    img: {
        width: Dimensions.get('window').width / 2,
        height: 'auto',
    }
});

export default Details;