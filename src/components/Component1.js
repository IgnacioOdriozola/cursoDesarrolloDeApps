import { StyleSheet, Text, View, Pressable, Modal ,Button} from "react-native";

export default Component1 = ({navigation}) => {
    return (
        <View>

            <Text>Componente de prueba para navigation 1</Text>
            <Button title='go To Component2' onPress={()=> navigation.navigate('Component2')}/>

        </View>
        
    )
}