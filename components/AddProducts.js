import React, {useState} from 'react';
import { StyleSheet, View, Modal,TextInput } from 'react-native';
import ButtonComponent from './ButtonComponent';
//import Input from './Input';
import Colors from '../constants/Colors';
import BodyText from './BodyText';
import AppStyles from '../constants/AppStyles';
import TitleText from './TitleText';

const AddProducts = ({submitHandler, displayModal, cancel}) =>{

    //Création d'une variable et son setters avec le hooks useState avec un des chaines vides en paramétre

    const [product, setProduct] = useState('');

//Déclaration pour des variables pour desactiver le boutons de validation
   /* const [btnDisable, setBtnDisable] = useState('true');*/
    //Condition pour desactiver le bouton de validation
   /* useEffect(() => {
        if (product.length>1){
            setBtnDisable(false);
        } else{
            setBtnDisable(true);
        }

    }, [product]);*/
    
    
    const inputHandler = (val) =>{
        const regex = /[^a-z]/gi;
        setProduct(val.replace(regex,""))
    }
    
    
    const handClick = () =>{
        //la méthode qui récupére les données dans le tableau
        submitHandler(product);
        //Le setter du produit pour vider automatiquement le TextInput
        setProduct('');
    }




    return(
        <Modal
            visible={displayModal}
            animationType= "slide"
        >
            <View style={styles.inputContainer}>

                <TitleText style={AppStyles.headerTwo}>Veuillez indiquer un produit</TitleText>
                <BodyText style={AppStyles.textBody}>Lorem ipsum</BodyText>
                <TextInput
                     style={styles.textInput}
                     placeholder="Nouveau produit"
                     onChangeText={inputHandler}
                     value={product}
                />
               
                {/* <Input 
                      style={styles.textInput}
                      textPlaceholder="Nouveau produit"
                      onChangeHandler={inputHandler}
                      valueText={product}
                      maxLenght={10}
                /> */}
               <View style={styles.btnContainer}>
                   <ButtonComponent 
                         btnTitle='Valider'
                        onPressHandler={handClick}
                        style={styles.btnBleu}
                   />
                   <ButtonComponent
                         btnTitle='Annuler'
                        onPressHandler={cancel}
                        style={styles.btnTomato}
                    />
               </View>
            </View>
        </Modal>

    )
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    textInput: {
        bodeBottomWidth: 1,
        margin: 12,
        borderBottomColor: "red",
        padding: 10,
        textAlign: "center",
        fontSize: 19,
        marginBottom: 20,
        //borderRadius: 30,
        height: 50,
        maxLingth : 10,
    },
    btnContainer:{
        flexDirection: "row",
        justifyContent: "space-between"

    },
    btnBleu:{
        backgroundColor: Colors.success,
        width: 150,
        padding:10,
        borderRadius: 6,
        
        
    },
    btnTomato:{
        backgroundColor: Colors.danger,
        width: 150,
        padding: 10,
        borderRadius: 6
    }
});
export default AddProducts