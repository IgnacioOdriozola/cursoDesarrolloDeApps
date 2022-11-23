import { StyleSheet, Text, View, Pressable, Modal ,Button} from "react-native";

export default Component1 = ({navigation}) => {
    return (
        <View>

            <Text>Componente de prueba para navigation 2</Text>
            <Button title='go To Shopping List' onPress={()=> navigation.navigate('ShoppingList')}/>

        </View>
    
    )
}