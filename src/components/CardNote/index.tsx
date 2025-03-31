import { INotas } from '@/interfaces/INota';
import { appColors, degradeTelas } from '@/theme/colors';
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function CardNote({ item, onSelect, onDelete, onEdit,onShare }
  : {
    item: INotas,
    onSelect: (item: INotas) => void,
    onDelete: (item: INotas) => void,
    onEdit: (item: INotas) => void,
    onShare: (item: INotas) => void,
  }) {

  return (
    <LinearGradient style={styles.card}
      colors={degradeTelas.selecionarNota}
    >
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={{backgroundColor:'gray',borderRadius:25,padding:5}} onPress={() => onEdit(item)}>
          <Feather name="edit-3" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'gray',borderRadius:25,padding:5}} onPress={() => onShare(item)}>
        <Entypo name="share" size={24} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'gray',borderRadius:25,padding:5}} onPress={() => onDelete(item)}>
          <MaterialIcons name="delete-forever" size={20} color="#fff" />
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={{alignItems:'flex-start'}} onPress={() => onSelect(item)}>
        <Text style={styles.title}>{item.TITLE}</Text>
        <Text style={styles.content}>
          {item.CONTENT.length > 30 ? item.CONTENT.substring(0, 30) + '...' : item.CONTENT}
        </Text>

      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    width: '45%',

    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  content: {
    fontSize: 14,
    color: '#fff',
  },
  buttonsContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 20,
  },
});
