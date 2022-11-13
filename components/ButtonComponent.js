import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const ButtonComponent = props =>{
    return(
        <TouchableOpacity
            onPress={props.onPressHandler}
            activeOpacity={0.9}
        >
            <View style={{...styles.btnp, ...props.style }}>
                <Text style={styles.btnText}>{props.btnTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn:{
        backgroundColor: "grey",
        padding: 9,
    },
    btnText:{
        color: "#fff",
        textAlign: "center",
        fontSize: 17,
    }
})

export default ButtonComponent