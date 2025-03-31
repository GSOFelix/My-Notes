import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useNoteActions } from '@/hooks/useNoteActions';

import { styles } from './styles';

export function NewNote() {
    const { titleValue, setTitleValue, contentValue, setContentValue, salvarNota } = useNoteActions();

    return (
        <LinearGradient
            colors={[
                '#264457', '#264f66', '#235a75', '#1d6684', '#107293'
            ]}
            start={{ x: 0, y: 0 }} // Começa no topo
            end={{ x: 0, y: 1 }}   // Termina na parte inferior
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
                    <TouchableOpacity onPress={salvarNota}>
                        <FontAwesome name="save" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerTitulo}>
                    <TextInput
                        style={styles.inputTitulo}
                        placeholder='Titulo da Nota'
                        value={titleValue}
                        onChangeText={setTitleValue}
                    />
                </View>

                {/* Conteúdo */}
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <TextInput
                            style={styles.inputContent}
                            placeholder='Digite sua nota'
                            multiline={true}
                            value={contentValue}
                            onChangeText={setContentValue}
                        />
                    </ScrollView>
                </View>


            </View>

        </LinearGradient>
    );
};
