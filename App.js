import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Modal, Text, Pressable, Image, ImageBackground } from 'react-native';
//import * as Font from 'expo-font';
import Apploading from 'expo-app-loading';
import {useFonts, Bangers_400Regular} from '@expo-google-fonts/bangers';
import Products from './components/Products';
import AddProducts from "./components/AddProducts";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from './components/Header';
import Colors from "./constants/Colors"

// const fetChFonts = () =>{
//     return Font.loadAsync({
//         "interBold":require('./assets/fonts/Inter-Bold.ttf'),
//         "interRegular":require('./assets/fonts/Inter-Regular.ttf'),
//         "indieflower":require('./assets/fonts/IndieFlower.ttf'),
//         "pacifico":require('./assets/fonts/Pacifico-Regular.ttf'),
//     })
// }

export default function App() {

    //Création d'une variable qui va mettre à jour les données avec son setter et le hooks de react
    // useState avec un tableau vide  pour enregistrer chaque données saisies dans le tableau
    const [myProducts, setMyProducts] = useState([]);


    const [showModal, setShowModal] = useState(false);


    const [displayModal, setDisplayModal] = useState(false);


    // const [font, setFont] = useState(false)

    const [font, error] = useFonts({
        Bangers : Bangers_400Regular,
        "interBold":require('./assets/fonts/Inter-Bold.ttf'),
        "interRegular":require('./assets/fonts/Inter-Regular.ttf'),
        "indieflower":require('./assets/fonts/IndieFlower.ttf'),
        "pacifico":require('./assets/fonts/Pacifico-Regular.ttf'),
    })

    if(!font){
        return(
            <Apploading />
        )
        
    }

    const submitHandler = (product) => {
        setDisplayModal(false);
        //Création d'un propos
        if (product.length > 1) {
            const idString = Date.now().toString()
            //Récupération des données
            setMyProducts(currentMyProducts => [{ key: idString, name: product }, ...currentMyProducts])
        } else {
            setShowModal(true)
        }

    }


    //La méthode qui va permettre de supprimer une donnée dans le tableau
    const deleteProduct = (key) => {
        setMyProducts(currentMyProducts => {
            return currentMyProducts.filter(product => product.key != key)
        })
    }
    // Méthode permettant d'annuler une action
    const cancel = () => {
        setDisplayModal(false)
    }


    return (
        <DismissKeyboard>

            <ImageBackground
                style={styles.bgImage}
                source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/25/00/51/christmas-1005228__480.jpg' }}
            >

                <Header />

                <View style={styles.container}>
                    <Modal
                        visible={showModal}
                        onRequestClose={() => setShowModal(false)}
                        animationType="slide"
                        hardwareAccelerated
                        transparent
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalText}>OUPS !</Text>
                                </View>

                                <View style={styles.modalBody}>
                                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/32/forbidden-159816__480.png' }}
                                        style={styles.redImage}
                                    />

                                    <Text style={styles.modalBodyText}>Merci d'indiquer le nom d'un produit</Text>
                                </View>
                                <View style={styles.modalFooter}>
                                    <Pressable
                                        style={styles.btnPressable}
                                        onPress={() => setShowModal(false)}
                                    >
                                        <Text style={styles.modalBtn}>OK</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                    </Modal>
                    <ButtonComponent
                        btnTitle={"Nouveau Produit"}
                        onPressHandler={() => setDisplayModal(true)}
                        style={styles.btnNew}
                    />
                    {/* <Button title={"Nouveau produit"} onPress={() =>setDisplayModal(true)} /> */}

                    <AddProducts
                        submitHandler={submitHandler}
                        displayModal={displayModal}
                        cancel={cancel}
                    />
                    <FlatList
                        data={myProducts}
                        renderItem={({ item }) =>
                            <Products
                                name={item.name}
                                idString={item.key}
                                deleteProduct={deleteProduct}
                            />}
                    />

                </View>

            </ImageBackground>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
    },

    button: {
        paddingTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    modalContent: {
        backgroundColor: "#fff",
        width: "90%",
        height: 250,
        alignItems: "center",
        borderRadius: 15,

    },
    modalHeader: {
        width: "100%",
        padding: 16,
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3",
        backgroundColor: `dimgray`,
    },
    modalText: {
        color: "#fff",
        fontSize: 17,
    },
    modalBody: {
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    modalBodyText: {
        fontSize: 17,
    },
    modalFooter: {
        width: "100%",
    },
    btnPressable: {
        backgroundColor: 'lightseagreen',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
    },
    modalBtn: {
        fontSize: 17,
        color: "fff",
        padding: 16,
    },
    redImage: {
        width: 90,
        height: 90,
    },
    btnNew: {
        backgroundColor: Colors.success,
        padding: 20,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: Colors.white, 
        marginBottom: 20,
    },
    bgImage: {
        flex: 1,
    }


});
