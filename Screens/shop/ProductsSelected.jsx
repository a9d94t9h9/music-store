import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import CardProduct from '../../components/CardItemProduct';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, selectedProduct } from '../../store/actions/products.action';
import { useNavigation } from '@react-navigation/core';
import { productSelect } from '../../store/actions/images.action';


const Product = () => {
    const dispatch = useDispatch();
    const categoryID = useSelector(state => state.categories.selectedID);
    const products = useSelector(state => state.products.filteredProducts)
    useEffect(() =>{
        dispatch(filterProducts(categoryID));
    }, [categoryID]);
    const navigation  = useNavigation();
    const handleNavigationDetail = (item)=>{
        dispatch(selectedProduct(item.id))
        dispatch(productSelect(item.id))
        navigation.navigate('Detail',{
            name : item.name,
        })
    }
    const render = data => {
        return(
            <CardProduct item={data.item} handleDetail={handleNavigationDetail} />
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={render}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Dimensions.get('window').width / 5,
    }
});

export default Product;