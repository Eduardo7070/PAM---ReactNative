import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [imgJogador, setImgJogador] = useState(0);
  const [imgMaquina, setImgMaquina] = useState(0);
  const [pontosJogador, setPontosJogador] = useState(0);
  const [pontosMaquina, setPontosMaquina] = useState(0);

  function reiniciarJogo() {
    setImgJogador(0);
    setImgMaquina(0);
    setPontosJogador(0);
    setPontosMaquina(0);
  }

  function exibirImagem(valor) {
    if (valor === 0) {
      return <Image source={require('./assets/caixa1.png')} style={{ width: 80, height: 80 }} />;
    } else if (valor == 1) {
      return <Image source={require('./assets/pedra.png')} style={{ width: 90, height: 80 }} />;
    } else if (valor == 2) {
      return <Image source={require('./assets/papel.png')} style={{ width: 100, height: 80 }} />;
    } else if (valor == 3) {
      return <Image source={require('./assets/tesoura.png')} style={{ width: 100, height: 80 }} />;
    }
  }

  function jogar(numJogador) {
    setImgJogador(numJogador);
    let numMaquina = Math.floor(Math.random() * 3) + 1;
    setImgMaquina(numMaquina);
    if (
      (numJogador == 1 && numMaquina == 3) ||
      (numJogador == 2 && numMaquina == 1) ||
      (numJogador == 3 && numMaquina == 2)
    ) {
      setPontosJogador(pontosJogador + 1);
    } else if (
      (numJogador == 3 && numMaquina == 1) ||
      (numJogador == 1 && numMaquina == 2) ||
      (numJogador == 2 && numMaquina == 3)
    ) {
      setPontosMaquina(pontosMaquina + 1);
    } else if(numJogador && numMaquina == 0){
      return <Image source={require('./assets/caixa1.png')} style={{ width: 80, height: 80 }} />;
    }
    
  }

  
  

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.texto}>Jo ken pô</Text>
      </View>

      <View style={styles.view2}>
        <View>
          <Text style={styles.placar}>Placar</Text>
        </View>
        <View style={styles.viewPlacar}>
          <Text style={styles.placar1}>{pontosJogador}</Text>
          <Text style={styles.placar1}>{pontosMaquina}</Text>
        </View>
      </View>

      <View style={styles.view3}>
        {exibirImagem(imgJogador)}

        <Image source={require('./assets/vss.png')} style={{ height: 60, width: 90 }} />

        {exibirImagem(imgMaquina)}
      </View>

      <View style={styles.view4}>
      <TouchableOpacity onPress={reiniciarJogo}>
          <View style={styles.botao}>
            <Text style={{ fontWeight: 'bold' }}>Nova Partida</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view5}>
      <TouchableOpacity onPress={() => jogar(1)}>
        <Image
             source={require("./assets/pedra.png")}
             style={{width: 90, height: 80 }}
          />
</TouchableOpacity>
<TouchableOpacity onPress={() => jogar(2)}>
<Image
             source={require("./assets/papel.png")}
             style={{width: 100, height: 80 }}
          />
</TouchableOpacity>
<TouchableOpacity onPress={() => jogar(3)}>
<Image
             source={require("./assets/tesoura.png")}
             style={{width: 100, height: 80 }}
          />
</TouchableOpacity>
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
  view1: {
    
    flex: 1, 
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    
    flex: 1,
    width: "100%",
  

  },
  view3: {
    
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  view4: {
  
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  view5: {

    flex: 1,
    width: "100%", 
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  texto: {
    
      
    fontFamily: "Cooper Black",
    fontSize: "7vh",
    color: "#8a2be2",
    fontStyle: "italic",
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 2,
  },

  placar: {
      
   
    fontFamily: "Britannic Bold",
    fontWeight: 'bold',
    fontSize: "4vh",
    textAlign: "center",
   
   
  },
  placar1: {
    fontSize: '2.5vh',
    fontWeight: 'bold',
  
  },
  botao: {
    borderWidth: 1,
    width: '140px',
    height: "70px",
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  viewPlacar: {
    justifyContent: "space-around", 
    flexDirection: "row",
  }


});