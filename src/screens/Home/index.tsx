import { Text, View, TextInput} from "react-native";

export default function Index() {
  return (
    <View 
    style={{
      backgroundColor: "#131016",
      flex: 1,
      padding: 24
    }}>
      <Text style={{color:"#fdfcde",
        fontWeight: "bold",
        fontSize: 24,
      }}>NOME DO EVENTO</Text>

      <Text style={{
        color: "#6b6b6b",
        fontSize: 16,
      }}>
        Sexta, 16 de Novembro de 202
      </Text>
    </View>
  );
}

