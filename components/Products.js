import React from 'react';
import {StyleSheet, Text, View, Pressable, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
const Products = ({name, deleteProduct, idString})=>{

    return(

        <Pressable
            onPress={() => deleteProduct(idString)}
        >
            <View style={styles.items}>
                <Text style={styles.element}><FontAwesome name="remove" size={25} color={Colors.white} /> {name}</Text>
            </View>
        </Pressable>




    )
}


const styles = StyleSheet.create({
    items:{
        marginTop:10,
        borderRadius: 6,
        backgroundColor: Colors.danger,
        padding: 20,
    },
    element:{
        color: Colors.white,
        fontSize:25,
    },
   

   
});
export default Products