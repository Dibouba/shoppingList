import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    headerOne:{
       fontFamily: 'Bangers',
       color: Colors.white,
       fontSize: 30,
       padding: 9,
    },
    headerTwo:{
        fontFamily: 'indieflower',
        color: Colors.dark,
        fontSize: 25,
        padding: 9,
        textAlign: "center",
     },
     textBody:{
        color: Colors.danger,
        fontSize: 19,
     }

})