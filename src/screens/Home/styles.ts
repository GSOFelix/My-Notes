import { appColors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:55,
    padding:10
  },
  background: {
    flex:1
  },
  textAnimation: {
    textAlign:'center',
    color:appColors.branco,
    fontSize:20,
    fontWeight:'bold'
  },
  animationContainer: {
    flex:1,
    justifyContent: 'center', // Garante que o conteúdo do View seja centralizado
    alignItems: 'center', // Garante que o conteúdo do View seja centralizado
  },
});