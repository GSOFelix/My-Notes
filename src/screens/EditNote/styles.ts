import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backGroud: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
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
    paddingHorizontal: 10
  },
  containerConteudo: {
    padding: 20
  },
  inputConteudo: {
    minHeight: 150, 
    maxHeight: '100%', 
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    fontSize: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  contentContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 6,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  inputContent: {
    fontSize: 18,
    color: '#FFF',

  },
});