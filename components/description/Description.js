import { useState } from "react"
import { Button, Text,TextInput,StyleSheet, Pressable, View  } from "react-native"


const Description = ({item, saveChange}) => {
    const [description, setDescription] = useState(item.description)
    const changeItem = (text) => {
        console.log(text);
        setDescription(text)
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <TextInput
            value={description}
            style={styles.inputStyle}
            placeholder="Add the item description"
            onChangeText={changeItem}
            />
            <Pressable style={styles.button} onPress={() => saveChange(description)}><Text>Save</Text></Pressable>
        </View>
    )
}

export default Description;

const styles = StyleSheet.create({
    container: {
      /* flex: 1,
      backgroundColor: "#344955", */
      alignItems: "center",
      paddingTop: 100,
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
      width: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
    },
  });