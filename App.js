import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import { PaperProvider, TextInput, Text, Button } from 'react-native-paper';
import { useState } from 'react';

export default function App() {

  let [cep, setCep] = useState("");
  let [render, setRender] = useState([]);


  const BuscaCep = (x) => {
    let url = `https://viacep.com.br/ws/${x}/json/`;
    console.log(url);

    fetch(url)
      .then(
        (resp) => { return resp.json() }
      ).then(
        (dados) => {
          console.log(dados);

          console.log(dados.logradouro);
          console.log(dados["logradouro"]);
          setRender(dados);

        }
      ).catch(
        (erro) => { console.log(erro) }
      )

  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Via Cep {cep}</Text>

        <TextInput
          label={'CEP:'}
          mode='outlined'
          onChangeText={(value) => { setCep(value) }}
        />
        <Button icon="magnify"
          onPress={() => { BuscaCep(cep) }}
          mode="contained"
        >
          Busca
        </Button>

          <Text> Endereço : { render["logradouro"] }</Text>
          <Text> Bairro : { render["bairro"] }</Text>
          <Text> Cidade : { render.localidade }</Text>
          <Text> Estado : { render.estado }</Text>

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#349',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
