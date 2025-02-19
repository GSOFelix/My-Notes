import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export function AddButtom({action}:{action: () => void}) {
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
            <Entypo name="plus" size={40} color="#FFFFFF" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 20, // Fixa o botão 20px acima do rodapé
      right: 20,  // Encosta o botão na lateral direita
      backgroundColor: '#0099b0',
      borderRadius: 50,
      padding:10,
      elevation: 3, 
    },
    textButton: {
      fontSize: 15,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });