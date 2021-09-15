import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import CardProduct from '../components/CardItemProduct';
import { Products } from '../data/products';
import { useSelector } from 'react-redux';

const Product = () => {
    const categoryId = useSelector(state => state.categories.selectedID);
    /* const selected = Products.filter(index => index.category === route.params.categoryId); */
    const selected = Products.filter(index => index.category === categoryId);
    const render = data => {
        return(
            <CardProduct item={data.item} />
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={selected}
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