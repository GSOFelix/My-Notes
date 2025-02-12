import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroud: {
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
    fontSize: 20,
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
    color: '#FFF'
  },
  containerConteudo: {
    padding: 20
  },
  scroller: {
    height: '75%',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  inputConteudo: {
    fontSize: 20,
    padding: 10,
    paddingBottom: 12,
    color: '#FFF',
    paddingHorizontal: 10,
    textAlignVertical: 'top',  // Garante que o texto comece do início
  }
});