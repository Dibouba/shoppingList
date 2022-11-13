import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/Colors'


const Input = (props) => {
  return (
    <TextInput 
      {...props}
        style={{...styles.input,...props.style}}
        placeholder={props.textPlaceholder}
        onchangeText= {props.onChangeHandler}
        value={props.valueText}
    />
  )
}



const styles = StyleSheet.create({
    input:{
        borderColor: Colors.secondary,
        borderWidth: 1,
        height: 40,
        marginVertical:5,

    }
})

export default Input