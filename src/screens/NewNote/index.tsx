import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';

export function NewNote() {
    return (
        <LinearGradient
            colors={['#6d90b9', '#bbc7dc']}
            style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: '100%'
            }}
        >
            <View style={styles.container}>
                
                <View style={styles.titulo}>
                    <Text style={styles.textTitulo}>Adicionar Notas</Text>
                    <FontAwesome name="save" size={30} color="#FFFFFF" />
                </View>

                <View style={styles.containerTitulo}>
                    <TextInput
                    style={styles.inputTitulo}
                    placeholder='Titulo da Nota'
                    />
                </View>

                <View style={styles.containerConteudo}>
                    <TextInput
                    style={styles.inputConteudo}
                    placeholder='Digite sua nota'
                    multiline={true}
                    />
                </View>

            </View>
        </LinearGradient>
    );
};
