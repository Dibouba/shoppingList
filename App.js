import React,{useState} from 'react'
import {StyleSheet, View, FlatList, Modal, Text, Pressable} from 'react-native';
import Products from './components/Products'
import AddProducts from "./components/AddProducts";

export default function App() {

//Création d'une variable qui va mettre à jour les données avec son setter et le hooks de react
// useState avec un tableau vide  pour enregistrer chaque données saisies dans le tableau
  const [myProducts, setMyProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const submitHandler = (product) =>{
        //Création d'un propos
            if (product.length > 1){
                const idString = Date.now().toString()
                //Récupération des données
                setMyProducts(currentMyProducts =>[{key: idString, name: product },...currentMyProducts])
            } else{
                setShowModal(true)
            }

        }


    //La méthode qui va permettre de supprimer une donnée dans le tableau
    const deleteProduct = (key) =>{
        setMyProducts(currentMyProducts=>{
            return currentMyProducts.filter(product=> product.key != key)
        })
    }

  return (
    <View style={styles.container}>
        <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            animationType= "slide"
            hardwareAccelerated
            transparent
        >
           <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalText}>OUPS !</Text>
                    </View>
                    <View style={styles.modalBody}>
                        <Text style={styles.modalBodyText}>Merci d'indiquer plus d'un seul caractère</Text>
                    </View>
                    <View style={styles.modalFooter}>
                       <Pressable
                           style={styles.btnPressable}
                           onPress={() =>setShowModal(false)}
                       >
                           <Text style={styles.modalBtn}>OK</Text>
                       </Pressable>
                    </View>
                </View>
           </View>
        </Modal>
        <AddProducts submitHandler={submitHandler}/>
      <FlatList 
        data={myProducts}
        renderItem = {({item}) =>
            <Products
                name={item.name}
                idString={item.key}
                deleteProduct={deleteProduct}
            /> }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:40,
    paddingTop: 60
  },

  button:{
    paddingTop:10,
  },
    modalContainer:{
      flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    modalContent:{
      backgroundColor: "#fff",
        width: "90%",
        height: 250,
        alignItems: "center",
        borderRadius: 15,

    },
    modalHeader:{
        width: "100%",
        padding: 16,
        alignItems: "center",
        borderTopLeftRadius:15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3",
        backgroundColor: `dimgray`,
    },
    modalText:{
        color: `#fff`,
        fontSize: 17,
    },
    modalBody:{
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    modalBodyText:{
        fontSize: 17,
    },
    modalFooter:{
        width: "100%",
    },
    btnPressable:{
        backgroundColor: 'lightseagreen',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: "center",
    },
    modalBtn:{
        fontSize: 17,
        color: "#fff",
        padding: 16,
    }


});
