import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native';
import {useState} from 'react';

export  default function App(){

const [impressao, setImpressao] = useState("");
const[img, setImg] = useState(0);


const frases  = [
  'Pal que da em chico da em Francisco',
  'Cachorro que late muito acaba na carrocinha',
  '10 anos de corre',
  'Saldo negativo',
  'Hoje sua alma vai... pena que o corpo fica',
  'Na metade do seu tempo eu fiz o triplo do seu corre',
  'Eu faço minhas escolhas',

];

function quebrar(){
  if(img ==0){
    let numAleatorio = Math.floor(Math.random() * frases.length);
    setImpressao(frases[numAleatorio])
    setImg(1)
  }
}
function novo(){
  setImpressao(frases[''])
  setImg(0)
}
function exibirImagem(numero){
  if(numero==0){
    return(<Image source={require('./assets/biscoito.png')} style={styles.img} />)
  }else{
    return(<Image source={require('./assets/quebrado.png')}  style={styles.img} />)
  }
}

return (
<View style={styles.container}>
  {exibirImagem(img)}
  <Text style={styles.textoFrase}>{impressao}</Text>
  <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}>  
    <View style={styles.btnArea} >
      <Text style={styles.btnTexto} >Quebrar Biscoito</Text>
    </View>
  </TouchableOpacity>
  <br></br>
  <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
    <View style={styles.btnArea}>
      <Text style={styles.btnTexto} >Novo Biscoito</Text>
    </View>
  </TouchableOpacity>
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
img: {
height:250,
width:250
},
textoFrase: {
fontSize:20,
margin:30,
fontStyle:'italic',
textAlign:'center'
},
botao: {
color: '#dd7b22',
height:50,
width:250,
borderWidth:2,
borderRadius:25,
textAlign:'center',
borderColor:  '#dd7b22',

},
btnArea: {
color: '#dd7b22',
flex:1,
alignItems:'center',
justifyContent:'center'
},
btnTexto: {
color: '#dd7b22',
fontSize:18,
fontWeight:'bold'
},
cab: {
textAlign:'left'
},
});
