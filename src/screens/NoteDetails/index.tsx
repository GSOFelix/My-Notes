import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './style';
import { RouteProp } from '@react-navigation/native';
import { propsNavigationStack } from '@/types/navigationTypes/navigationProps';
import { LinearGradient } from 'expo-linear-gradient';
import { formatarData } from '@/Utils/formateDate';
import { appColors, degradeTelas } from '@/theme/colors';

type NotaDetalhe = RouteProp<propsNavigationStack, 'NoteDetails'>;

export function NoteDetails({ route }: { route: NotaDetalhe }) {
    const { nota } = route.params;
    const [titleValue, setTileValue] = useState<string>(nota.TITLE);
    const [contentValue, setContentValue] = useState<string>(nota.CONTENT);

    return (
        <LinearGradient
            colors={degradeTelas.selecionarNota}
            style={styles.backgroud}>

            <View style={styles.container}>

                <View style={styles.titulo}>
                    <Text style={styles.textTitulo}>Data Criação: {formatarData(nota.DATE)} </Text>
                </View>

                <View style={styles.containerTitulo}>
                    <TextInput
                        style={styles.inputTitulo}
                        value={titleValue}
                        readOnly={true}/>
                </View>

                <View style={styles.containerConteudo}>
                    <ScrollView style={styles.scroller} showsVerticalScrollIndicator={false}>
                        <Text
                            style={styles.inputConteudo}
                            selectable={true}
                        >{contentValue}
                        </Text>
                    </ScrollView>
                </View>

            </View>
        </LinearGradient>
    );
}