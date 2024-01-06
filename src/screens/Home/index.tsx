import { Text, View } from "react-native";
import { styles } from './styles'
export function Home() {
return(
<View style={styles.container}>
  <Text style={styles.eventName} key="1" >Nome do evento</Text>
  <Text style={styles.eventDate} key="2" >Sexta, 4 de Novembro de 2024</Text>
</View>
)
}

