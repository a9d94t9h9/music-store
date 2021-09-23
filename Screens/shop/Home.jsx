import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CardItem from '../../components/CardItem';
import { useNavigation } from '@react-navigation/core';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { categorySelected } from '../../store/actions/category.action';


const Home = ()=>{
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.list);

    const navigation  = useNavigation();
    const handleNavigationName = (item) => {
        dispatch(categorySelected(item.id));
        navigation.navigate('Products', {
            categoryId: item.id,
            name: item.name,
        });
    }
    
    const renderItem = data => (
                    <CardItem item={data.item} handleNavigationName={handleNavigationName} />
                );
               
    return(
        <View style={styles.mainContainer} >
             
           <FlatList 
            data={categories}
            renderItem={renderItem}
            keyExtractor={ (item) => item.id}
            />
        </View> )
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        /* paddingVertical: 20, */
        flexDirection: 'column',
        marginTop: 40,
        
        
    },
   
});

export default Home;