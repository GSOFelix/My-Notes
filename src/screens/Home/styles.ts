import { appColors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:50,
    padding:10
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%'
  },
  textAnimation: {
    textAlign:'center',
    color:appColors.branco,
    fontSize:20,
    fontWeight:'bold'
  },
  animationContainer: {
    justifyContent: 'center', // Garante que o conteúdo do View seja centralizado
    alignItems: 'center', // Garante que o conteúdo do View seja centralizado
  },
});