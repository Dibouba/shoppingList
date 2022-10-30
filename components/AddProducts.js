import React, {useState} from 'react';
import { StyleSheet, View, TextInput,Button } from 'react-native';
const AddProducts = ({submitHandler}) =>{
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
        setProduct(val)
    }
    
    
    const handClick = () =>{
        //la méthode qui récupére les données dans le tableau
        submitHandler(product);
        //Le setter du produit pour vider automatiquement le TextInput
        setProduct('');
    }




    return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Nouveau produit"
                    onChangeText={inputHandler}
                    value={product}
                />
                <Button
                    title='Valider'
                    onPress={handClick}

                />
            </View>
    )
};
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
    },
});
export default AddProducts