import { Text, View, TextInput, StyleSheet, TouchableOpacity, FlatList, Alert} from "react-native";
import { Participante } from "./Componentes/index";
import { useState } from "react";

export default function Index() {
  const [Participantes, setParticipantes] = useState<string[]>([]);
  const [ParticipanteName, setParticipanteName] = useState("");
 

  function handleParticipantAdd()
  {
    if(Participantes.includes(ParticipanteName))
    {
     return Alert.alert("Participante existe", "Ja existe um participante na lista com esse nome")
    }
    setParticipantes( prevState => [...prevState, ParticipanteName]);
    setParticipanteName("");
  }

  function handleParticipantRemove( nome: string){
    
    Alert.alert("Remover", `Remover o participante ${nome}?`, [
      {
        text:"Sim",
        onPress : () => setParticipantes(prevState => prevState.filter(Participante => Participante !== nome))
      },
      {
        text: "Não",
        style:"cancel"
      }
    ])
  }


  return (
    <View style={styles.principal}>

      <Text style={{color:"#31cf67",
        fontWeight: "bold",
        fontSize: 28,
      }}>SEMANA GRÊMIO
      </Text>

      <Text style= {{color:"#FFF"}}>
       SONHOS EM ACÇÃO 
      </Text>

      <Text style={{
        color: "#6b6b6b",
        fontSize: 16,
      }}>
        26 a 28 de Dezembro de 2024
      </Text>
      
    <Text style={{ 
      color:"#fdfcde",
      padding:10,
    }} >
      Mapa De Controlo
    </Text>
      <View style={styles.form}>
      <TextInput 
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor={"#6b6b6b"}
      keyboardType="visible-password"
      onChangeText={setParticipanteName}
      value={ParticipanteName}/>

      <TouchableOpacity style ={styles.button} onPress={handleParticipantAdd}>
        <Text style ={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>

      <FlatList
      data={Participantes}
      keyExtractor={item => item}
      renderItem={({item}) =>
      (
        <Participante 
          key={item}
          nome  ={item} 
          onRemove={() => handleParticipantRemove (item)}
          />
      ) }

      ListEmptyComponent={() => (
        <Text style= {styles.listEmptyText}>
          Ninguem chegou ao evento ainda, adiciona a sua lista de participante
        </Text>
      )}
      /> 
    </View>
  );
}

const styles =StyleSheet.create({

principal:{ 
  backgroundColor: "#131016",
  flex: 1,
  padding: 24,
  alignItems:"center",
  margin:0.1,
},
input:{
flex:1,
height:56,
backgroundColor: "#1f1e25",
borderRadius:5,
color:"#fff",
padding:16,
fontSize:16,
marginRight:12,
},

buttonText:{
color:"#fff",
fontSize:24,
},
button:{
width: 56,
height: 56, 
borderRadius:5,
backgroundColor:"#31cf67",
alignItems:"center",
justifyContent:"center",
},

form:{
width: "100%",
flexDirection:"row",
marginTop: 36,
marginBottom:42
},

listEmptyText:{
  color:"#fff",
  fontSize: 14,
  alignItems: "center",
}
});
