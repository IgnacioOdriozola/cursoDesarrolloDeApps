import { StyleSheet, View, TextInput,Button } from 'react-native';
import TestComponent from './components/test-component/TestComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>Hola, Coder!</View>
        <TextInput placeholder='Ingrese texto' style={styles.testInput}/>
        <Button title="Test Button" color={'red'} style={styles.testButton}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
