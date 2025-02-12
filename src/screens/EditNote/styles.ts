import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
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
    padding: 20,
    alignItems: 'center'
  },
  textTitulo: {
    fontSize: 30,
    color: '#FFFF'
  },
  containerTitulo: {
    padding: 20
  },
  inputTitulo: {
    borderWidth: 2,
    borderColor: '#FFF',
    height: 60,
    borderRadius: 10,
    fontSize: 30,
    color: '#313740'
  },
  containerConteudo: {
    padding: 20
  },
  inputConteudo: {
    height: '85%',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    fontSize: 20,
    color: '#313740',
    paddingHorizontal: 10,
    textAlignVertical: 'top',  // Garante que o texto comece do início
  }
});