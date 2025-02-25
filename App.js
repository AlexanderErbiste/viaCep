import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import { PaperProvider, TextInput, Text, Button } from 'react-native-paper';
import { useState } from 'react';

export default function App() {

  let [cep, setCep] = useState("");

  const BuscaCep=(x)=>{
    let url=`https://viacep.com.br/ws/${x}/json/`;
    console.log(url);
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Via Cep {cep}</Text>

        <TextInput
          label={'CEP:'}
          mode='outlined'
          onChangeText={(value)=>{setCep(value)}}
        />
        <Button icon = "magnify" 
          onPress = {()=>{BuscaCep(cep)}}
          mode = "contained"
        >
          Busca
        </Button>
    
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
