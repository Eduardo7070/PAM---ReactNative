import { StyleSheet, Text, View  } from 'react-native';
import { Button, Picker, TextInput, Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View >
      <Image
      source={require("./assets/palmeiras.jpg")}
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
      />
      <TextInput style = {styles.input}

        placeholder="Digite Telefone:"
        keyboardType="Text"
      />

      <TextInput style = {styles.input}

        placeholder="Digite seu endereço:"
        keyboardType="Text"
      />

      <TextInput style = {styles.input}
   
        placeholder="Digite seu email:"
        keyboardType="Text"
    
        
      />
    
    </View>
    
  
     <View>

      <Text  style = {styles.texto2}>  Seu hobby </Text>
      </View>


      <View style = {styles.hobby}> 
      <br>
     </br>

       <Picker>
        <Picker.Item  style = {styles.item} label="Programar"/>
        <Picker.Item style = {styles.item} label="Estudar"/>
       
      </Picker>
      </View>
    
    <View style = {styles.variavel}>
    <Text>
      Nome:
    </Text>
    <Text>
      Telefone:
    </Text>
    <Text>
      Enderço:
    </Text>
    <Text>
      Email:
    </Text>
    <Text>
      Hobby:
    </Text>
    <Text>
      Aceito: 👎 
    </Text>
    

    


    
    </View>



    </View>
  
    
    

  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
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
    borderRadius: '5px',
    borderWidth: '2px',
    padding: '-2px',
    margin: '1px',
    width: '320px',
    height: '70px',
    marginTop: '-1px',

    
  },
  variavel: {
    borderRadius: '5px',
    borderWidth: '2px',
    height: '120px',
    width: '320px',
    marginTop: '50px',
    
  },


  



});


