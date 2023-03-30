
    
    

import { StyleSheet, Text, View  } from 'react-native';
import { Button, Picker, TextInput, Image } from 'react-native-web';
import { useState } from 'react';
import { CheckBox } from 'react-native-web';

export default function App() {
  const [aceita, setAceita] = useState(true);  
  const [nome, setNome] = useState ("");
  const [telefone, setTelefone] = useState ("");
  const [endereco, setEndereco] = useState ("");
  const [email, setEmail] = useState ("");
  const [hobby, setHobby] = useState ("");
  const [hobbySelecionado, setHobbySelecionado] = useState([]);
  

 
 

   const Exibir  = () => { 
    setExibir ([nome, telefone, endereco, email, hobby]);

  };
  return (
    <View style={styles.container}>
       <View >
      <Image
      source={require("./assets/usuario3.png")}
      style={{width: 100, height: 100, marginTop: -150 }}
      

      />
      </View>
     
      <View>

      <Text style = {styles.texto}>Dados Pessoais</Text>
      </View>

          <View style = {styles.dadosPessoais}> 
    
          <br>
     </br>
      <TextInput style = {styles.input}
        
        placeholder="DIgite seu nome:"
        keyboardType="Text"
        onChangeText = {(text) => setNome (text)} 
      />

      <TextInput style = {styles.input}

        placeholder="Digite Telefone:"
        keyboardType="Text"
        onChangeText = {(text) => setTelefone (text)} 
      />

      <TextInput style = {styles.input}

        placeholder="Digite seu endereço:"
        keyboardType="Text"
        onChangeText = {(text) => setEndereco (text)} 
        


      />

      <TextInput style = {styles.input}
   
        placeholder="Digite seu email:"
        keyboardType="Text"
        onChangeText = {(text) => setEmail (text)} 
    
        
      />
    
    </View>
    
  
     <View>

      <Text  style = {styles.texto2}>  Seu hobby </Text>

      </View>


      <View style = {styles.hobby}> 
      <br>
     </br>

     <Picker style = {styles.Picker}
          selectedValue={hobby}
          onValueChange={(itemValue,itemIndex)=> setHobby(itemValue)}
        >
          
         
          <Picker.Item label=  "Programar" value="Progaramar" />
          
          <Picker.Item label=  "Estudar" value="Estudar" />
          <Picker.Item label=  "Jogar bola" value="Jogar bola" />
          <Picker.Item label=  "Assistir serie" value="Assistir serie" />

        </Picker>
          


         <View style = {styles.CheckBox}>     
          <CheckBox
            value={aceita}
            onValueChange={() => setAceita(!aceita)}
            color={aceita ? "#0000CD" : undefined}
            style = {{alingSelf: "center"}}
          />
           <Text style= {{fontSize: '17px', marginTop: '-20px', marginLeft: '15px'}}> Aceito os Termos </Text>
       
         </View> 
      </View>
      <View>
      
      </View>
    
    <View style = {styles.variavel}>
    <Text>
      Nome: {nome} 
    </Text>
    <Text>
      Telefone: {telefone}
    </Text>
    <Text>
      Enderço: {endereco}
    </Text>
    <Text>
      Email: {email}
    </Text>
    <Text>
      Hobby: {hobby}
    </Text>
    <Text>
      Aceito: {aceita?" 👍":"👎"} 
    </Text>
    

    


    
    </View>



    </View>
  
    
    

  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  dadosPessoais:  {
    borderRadius: '5px',
    borderWidth: '2px',
    padding: '-5px',
    margin: '1px',
    width: '320px',
    height: '230px',
    marginTop: '-10px',
    
    
   

  },
  texto:  {
    fontSize: '3vh',
    marginTop: '-45px',


  }, 
  input: {
    borderRadius: '5px',
    borderWidth: '2px',
    marginTop: '25px',
    width: '300px',
    marginLeft: '8px',
    
  },
  texto2:  {
    fontSize: '3vh',
    marginTop: '15px',
    textAlign: 'center',


  }, 
  hobby: {
    borderRadius: '10px',
    borderWidth: '2px',
    padding: '-2px',
    margin: '1px',
    width: '320px',
    height: '80px',
    marginTop: '-1px',

    
  },
  variavel: {
    borderRadius: '5px',
    borderWidth: '2px',
    height: '120px',
    width: '320px',
    marginTop: '50px',
    
  },
CheckBox: {
  marginTop: '11px',
  marginLeft: '7px',
},
Picker: {
  borderRadius: '05px',
  borderWidth: '2px',
  backgroundColor: '#87ceeb',
  borderColor: 'black'
 
}
  



});





