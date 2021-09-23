import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
/* showsHorizontalScrollIndicator = {false} */
const Details = ()=>{
    const productID = useSelector(state => state.products.selectedID);
    const products = useSelector(state => state.products.list);
    const product = products.find(item => item.id === productID);
    const img = useSelector(state => state.images.list);
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