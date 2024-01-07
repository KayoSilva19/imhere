import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'#121212', 
  },
  eventName: {
    color: '#fcfefd', 
    marginTop:48, 
    fontWeight: '700',
    fontSize: 24,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    height: 56,
    flex: 1,
    fontSize: 16,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 15,
  },
  buttonAdd: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32A852',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 24,
  }
})
