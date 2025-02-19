import { appColors } from "@/theme/colors";
import LottieView from "lottie-react-native";
import { View,Text,StyleSheet } from "react-native";

export const EmptyNoteAnimation = () => (
    <View style={styles.animationContainer}>
      <LottieView
        source={require('@/assets/animations/emptyNote.json')}
        autoPlay
        loop={false}
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.textAnimation}>Nenhuma nota aqui ainda</Text>
    </View>
  );
  
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      padding: 10,
    },
    background: {
      flex: 1,
    },
    textAnimation: {
      textAlign: 'center',
      color: appColors.branco,
      fontSize: 20,
      fontWeight: 'bold',
    },
    animationContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });