import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import CardProduct from '../components/CardItemProduct';
/* import { Products } from '../data/products'; */
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts } from '../store/actions/products.action';

const Product = () => {
    const dispatch = useDispatch();
    const categoryID = useSelector(state => state.categories.selectedID);
    /* const selected = Products.filter(index => index.category === route.params.categoryId); */
    /* const selected = Products.filter(index => index.category === categoryId); */
    const products = useSelector(state => state.products.filteredProducts)
    useEffect(() =>{
        dispatch(filterProducts(categoryID));
    }, [categoryID]);
    const render = data => {
        return(
            <CardProduct item={data.item} />
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
        /* gap: 100, */
        marginVertical: Dimensions.get('window').width / 5,
    }
});

export default Product;