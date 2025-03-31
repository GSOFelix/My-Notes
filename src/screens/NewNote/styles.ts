import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textTitulo: {
    fontSize: 30,
    color: '#FFFF'
  },
  containerTitulo: {
    marginBottom: 20,
  },
  inputTitulo: {
    borderWidth: 2,
    borderColor: '#FFF',
    height: 60,
    borderRadius: 10,
    fontSize: 30,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 5,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  inputContent: {
    fontSize: 18,
    color: '#FFF',
    textAlignVertical: 'top',
  },
});