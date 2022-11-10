import { StyleSheet, Text, View, Pressable, Modal ,Button} from "react-native";
import React from "react";
  
const Popup = (props) => {
    //const {isVisible} = props

    const {isVisible, closeModal,deleteItem,finishedItem} = props
  
  
    return (
        <Modal style={styles.screen} animationType="fade" transparent={false} visible={isVisible}>
            <Text style={styles.inputContainer}>soy un modal</Text>
          <Button onPress={closeModal} color={'gray'} title='Cerrar'></Button>
          <Button onPress={deleteItem} color={'red'} title='Borrar'></Button>
          <Button onPress={finishedItem} color={'green'} title='Terminar'></Button>
        </Modal>
    )
}

export default Popup;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: 50,
        width:30
      },
    inputContainer: {
      width: 300,
      padding: 20,
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.5,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: "white",
      marginTop:200
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    testInput:{
      width:300,
      borderColor:'grey',
      borderRadius:10,
      borderWidth:5
    },
    testButton:{
      width: 150
    }
  });
  