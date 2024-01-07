import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 10, 
  },
  name: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  }, 
  button: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E23C44',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 24,
  }

})