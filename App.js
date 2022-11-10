import { useState } from 'react';
import { StyleSheet, View, TextInput,Button, Text, FlatList, Pressable,Modal } from 'react-native';

import Popup from './components/utils/Popup'

export default function App() {
  const [textItem, setTextItem] = useState();
  const [itemList, setItemList] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [finishedItemLabel, setFinishedItemLabel] = useState(false)

  const changeItem = (item) =>{
    setTextItem({id:itemList.length===0?0:parseInt(itemList[itemList.length-1].id)+1,value: item})
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

  const renderingItem = (item) =>{
    return(
              <View id={item.item.id} style={textItem?.id===item.item.id && finishedItemLabel?styles.finishedItem : styles.item}>
                <Pressable onPress={()=> openItem(item)}>
                  <Text>{item.item.value}</Text>
                </Pressable>
              </View>
  )}

  const deleteItem = () =>{
    setItemList(itemList.filter(iL => iL.id!== textItem.id))
    setOpenModal(false)
  }

  const finishedItem = () => {
    setFinishedItemLabel(true);
    setOpenModal(false)
  }

  return (
    <View>
        <Text>Hola, Coder!</Text>
        <Text>Shopping List</Text>
        <View style={styles.testInput}>
          <TextInput
            value={textItem}
            style={styles.testInput}
            placeholder="Add your item"
            onChangeText={changeItem}
            />
            <Button title="ADD" onPress={buildItemList}/>
        </View>
        <View>
          <FlatList
            data={itemList}
            renderItem={ renderingItem}
            keyExtractor={(item)=> item.id}
            >
          </FlatList>
          <Popup isVisible={openModal} closeModal={closeModal} deleteItem={deleteItem} finishedItem={finishedItem}></Popup>
        </View>
      </View>
  );
}



const styles = StyleSheet.create({
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
  },
  finishedItem:{
    backgroundColor:'green'
  }
});
