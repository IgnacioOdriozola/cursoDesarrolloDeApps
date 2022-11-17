import { useState } from 'react';
import { StyleSheet, View, TextInput,Button, Text, FlatList, Pressable,TouchableOpacity } from 'react-native';

import Popup from './components/utils/Popup'
import Description from './components/description/Description'

export default function App() {
  const [textItem, setTextItem] = useState();
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [finishedItemLabel, setFinishedItemLabel] = useState(false);
  const [openDescription, setOpenDescription] = useState(false)

  const changeItem = (item) =>{
    setTextItem({id:itemList.length===0?0:parseInt(itemList[itemList.length-1].id)+1,title: item, description:""})
    console.log(itemList);
  }

  const closeModal = () =>{
    setOpenModal(false);
  }

  const buildItemList = () => {
    setItemList((current)=>[
      ...current,textItem
    ])
    /* setItemList(
      [...itemList, {id:itemList.length+1,value: textItem}]
    ), */
    setTextItem("")
  }

  const openItem = ({item}) =>{
    setTextItem(item);
    setOpenModal(true);
  }

  const deleteItem = () =>{
    setItemList(itemList.filter(iL => iL.id!== textItem.id))
    setOpenModal(false)
  }

  const finishedItem = () => {
    //setFinishedItemLabel(true);
    setOpenDescription(true)
    setOpenModal(false)
  }

  const saveDescription = (editedDescription) => {
    itemList[itemList.indexOf(textItem)].description = editedDescription;
    setOpenDescription(false);
  }

  const selectShoppingList = () => {
    return(
    <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Shopping List</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            value={textItem}
            style={styles.inputStyle}
            placeholder="Add your item"
            onChangeText={changeItem}
            />
          <TouchableOpacity style={styles.button} onPress={buildItemList}>
            <Text> Add </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={itemList}
            renderItem={ renderingItem}
            keyExtractor={(item)=> item.id}
            >
          </FlatList>
          <Popup item={textItem} isVisible={openModal} closeModal={closeModal} deleteItem={deleteItem} finishedItem={finishedItem}/>
        </View>
      </View>
    )
  }

  const selectDescription = () => {
    return ( <Description item={textItem} saveChange={saveDescription}/>)
  }
  
  const renderingItem = (item) =>{
    return(
              <View style={styles.rowcontainer} id={item.item.id} >
                <Pressable style={styles.inputStyle} onPress={()=> openItem(item)}>
                  <Text>{item.item.title}</Text>
                </Pressable>
              </View>
  )}

  return (
    <View>
      {!openDescription?selectShoppingList():selectDescription()}
    </View>
  )
}



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
