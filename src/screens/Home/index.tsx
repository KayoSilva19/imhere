import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Participant } from "../../components/Participant";
export function Home() {

  function handleParticipantAdd() {
    return alert('aqui')
  }

return(
<View style={styles.container}>
  <Text style={styles.eventName} key="1" >Nome do evento</Text>
  <Text style={styles.eventDate} key="2" >Sexta, 4 de Novembro de 2024</Text>

  <View style={styles.form}>
    <TextInput 
      style={styles.input}
      placeholder="Digite o nome do evento"
      placeholderTextColor="#6B6B6B"
      key="3"
    />

    <TouchableOpacity style={styles.buttonAdd} onPress={handleParticipantAdd}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  </View>

  <Participant />
  <Participant />
</View>
)
}

