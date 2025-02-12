import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1
  },
  titulo:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
    alignItems:'center'
  },
  textTitulo:{
    fontSize:30,
    color:'#FFFF'
  },
  containerTitulo:{
    padding:20
  },
  inputTitulo:{
    borderWidth:2,
    borderColor:'#FFF',
    height:60,
    borderRadius:10,
    fontSize:30,
    color:'#FFF'
  },
  containerConteudo:{
    padding:20
  },
  inputConteudo: {
    height:'85%',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    fontSize: 20,
    color: '#FFF',
    paddingHorizontal:10,
    textAlignVertical: 'top',  // Garante que o texto comece do início
  }
});