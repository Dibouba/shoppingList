import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import TitleText  from './TitleText';
import AppStyles from '../constants/AppStyles';


const Header = () => {
  return (
    <View style={styles.header}>
      {/* <Text style={styles.logo}>My Shopping List</Text> */}
      <TitleText style={AppStyles.headerOne}>My Shopping List</TitleText>
    </View>
  )
}



const styles = StyleSheet.create({
    header:{
        backgroundColor: "darkred",
        justifyContent: "center",
        alignItems: "center",
        mnHeight: 30,
        paddingTop: 25,
        padding: 15,

    },
    
})
export default Header