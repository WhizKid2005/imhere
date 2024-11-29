import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props ={
    nome : string
    onRemove: ()=> void;
}
export function Participante({nome, onRemove} : Props){
    return(
        <View style={styles.container}>
            <Text style ={styles.nome}>
                {nome}
            </Text>

        <TouchableOpacity style ={styles.button} onPress={onRemove}>
        <Text style ={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
      

        </View>
    )
}

const styles =StyleSheet.create({
container:{
width:"100%",
backgroundColor:"#1f1e25",
borderRadius:5,
flexDirection:"row",
alignItems:"center",
marginBottom:10,
},
nome:{
flex:1,
 color:"#fff",
 marginLeft: 16,
 fontSize:16,
},

buttonText:{
    color:"#fff",
    fontSize:24,
    },
    button:{
    width: 56,
    height: 56, 
    borderRadius:5,
    backgroundColor:"#e23c44",
    alignItems:"center",
    justifyContent:"center",
    },
    

    }
)