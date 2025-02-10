import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export function AddButtom({action}:{action: () => void}) {
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.textButton}>Nova Nota</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 20, // Fixa o botão 20px acima do rodapé
      right: 20,  // Encosta o botão na lateral direita
      backgroundColor: '#6D51A5',
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 25,
      elevation: 3, 
    },
    textButton: {
      fontSize: 15,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });