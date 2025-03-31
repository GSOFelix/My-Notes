import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './style';
import { RouteProp } from '@react-navigation/native';
import { propsNavigationStack } from '@/types/navigationTypes/navigationProps';
import { LinearGradient } from 'expo-linear-gradient';
import { formatarData } from '@/Utils/formateDate';
import { degradeTelas } from '@/theme/colors';

type NotaDetalhe = RouteProp<propsNavigationStack, 'NoteDetails'>;

export function NoteDetails({ route }: { route: NotaDetalhe }) {
    const { nota } = route.params;

    return (
        <LinearGradient colors={degradeTelas.selecionarNota} style={styles.background}>
            <View style={styles.container}>
                {/* Data de criação */}
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Criado em: {formatarData(nota.DATE)}</Text>
                </View>

                {/* Título */}
                <View style={styles.titleContainer}>
                    <TextInput
                        style={styles.inputTitle}
                        value={nota.TITLE}
                        editable={false}
                    />
                </View>

                {/* Conteúdo */}
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text
                            style={styles.inputContent}
                            selectable={true}>{nota.CONTENT}</Text>
                    </ScrollView>
                </View>
            </View>
        </LinearGradient>
    );
}