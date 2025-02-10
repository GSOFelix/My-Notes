import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function CardNote({ item }: { item: any }) {
  return (
    <LinearGradient style={styles.card}
      colors={['#6d90b9', '#bbc7dc']}
    >
      <TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>
          {item.content.length > 50 ? item.content.substring(0, 50) + '...' : item.content}
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
});
