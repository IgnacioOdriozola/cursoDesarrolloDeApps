import { StyleSheet, Text, View, Pressable, Modal ,Button} from "react-native";
import React from "react";
import colors from "../../constants/colors"
  
const Popup = (props) => {
    const {item,isVisible, closeModal,deleteItem,finishedItem} = props
  
    return (
        <Modal style={styles.card} animationType="fade" transparent={false} visible={isVisible}>
            <Text style={styles.inputStyle}>{item?.title}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={{...styles.button, backgroundColor:"gray"}} onPress={closeModal} ><Text>Cerrar</Text></Pressable>
              <Pressable style={{...styles.button, backgroundColor:colors.red}} onPress={deleteItem}  ><Text>Borrar</Text></Pressable>
              <Pressable style={{...styles.button, backgroundColor:colors.green}} onPress={finishedItem} ><Text>Editar</Text></Pressable>
            </View>
        </Modal>
    )
}

export default Popup;

const styles = StyleSheet.create({
  container: {
    /* flex: 1,
    backgroundColor: "#344955", */
    alignItems: "center",
    paddingTop: 100,
  },
  buttonContainer:{
    flexDirection:"row"
  },
  inputcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    height:100,
    paddingHorizontal: 30,
    borderColor: "red",
    borderWidth:1
  },
  rowcontainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height:50,
    paddingHorizontal: 50,
    borderColor: "red",
    borderWidth:1
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: "#F9AA33",
    height: 35,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  card:{
    width: "80%",
    maxWidth: 400,
    minWidth: 100,
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  }
});
  