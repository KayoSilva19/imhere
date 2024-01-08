import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';
import { useState } from 'react';
export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante já existe', 'Já existe um participante na lista com este mesmo nome.')
    }

    if(participantName === '') {
      return Alert.alert('Preencha o nome do participante', 'Você esqueceu de colocar o nome do convidado!')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(participantName: string) {
    Alert.alert('Remover Participante', `Deseja remover este participante? Nome: ${participantName}`, [{
      text: 'Sim',
      onPress: () => {
       setParticipants(prevState => prevState.filter(participant => participant !== participantName))
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
        value={participantName}
        onChangeText={(nameParticipant) => setParticipantName(nameParticipant)}
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

