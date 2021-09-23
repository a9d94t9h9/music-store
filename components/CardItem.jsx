import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

/* import KeyBoard from '../Screens/KeyBoard'; */

const CardItem = ({item, handleNavigationName}) => {
    
    
    return(
        <TouchableOpacity style={styles.container} onPress={() => handleNavigationName(item)} > 
                 <ImageBackground source={item.url} style={styles.containerBackground}>
                
                <View style={styles.overlay} ><Text style={styles.textCard} >{item.name}</Text></View>
                </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 150,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        borderRadius: 20,
        marginBottom: '10%',
    },
    containerBackground: {
        borderRadius: 20,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        flex: 1,
     },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(54, 47, 47, 0.35)',
        textAlign: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    textCard: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
    }
});

export default CardItem;