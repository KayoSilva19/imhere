import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';
export function Home() {

  const participants = ['Kayo', 'Maria', 'Davi', 'Irene', 'João', 'Keyne', 'Kelvin', 'Kyane', 'Anderson']

  function handleParticipantAdd() {
    if(participants.includes('Kayo')) {
      return Alert.alert('Participante já existe', 'Já existe um participante na lista com este mesmo nome.')
    }
  }

  function handleParticipantRemove(participantName: string) {
    Alert.alert('Remover Participante', `Deseja remover este participante? Nome: ${participantName}`, [{
      text: 'Sim',
      onPress: () => {
       Alert.alert('Remover Participante', `O participante ${participantName} foi deletado da lista.`)
      }
    }, {
      text: 'Não',
      style: 'cancel'
    }])
  }

return(
  <View style={styles.container}>
    <Text style={styles.eventName} key='1' >Nome do evento</Text>
    <Text style={styles.eventDate} key='2' >Sexta, 4 de Novembro de 2024</Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor='#6B6B6B'
        key='3'
      />

      <TouchableOpacity style={styles.buttonAdd} onPress={handleParticipantAdd}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant 
        key={item} 
        participantName={item} 
        onRemove={() => handleParticipantRemove(item)}
      /> 
      )}

      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>Nenhum participante encontrado, adicione participantes ao seu evento 🎉</Text>
      </View>
      )}
    />
  </View>
)
}

