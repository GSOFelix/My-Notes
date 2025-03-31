import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';
import { editNotaAsync, } from '@/database/useDataBase/useNotasDataBase';
import Toast from 'react-native-toast-message';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { propsNavigationStack, propsStack } from '@/types/navigationTypes/navigationProps';
import { INotas } from '@/interfaces/INota';


type EditeNoteProps = RouteProp<propsNavigationStack, 'EditNote'>;

export function EditNote({ route }: { route: EditeNoteProps }) {
    const { nota } = route.params;
    const navigation = useNavigation<propsStack>();
    const [titleValue, setTitleValue] = useState<string>(nota.TITLE);
    const [contentValue, setContentValue] = useState<string>(nota.CONTENT);

    const onChangeTextFild = (field: string, value: string) => {
        if (field === 'Title') {
            setTitleValue(value);
        } else {
            setContentValue(value);
        }
    };

    const salvarNota = async () => {
        // Verificar se os campos estão em branco
        if (titleValue.length === 0 || contentValue.length === 0) {
            Alert.alert("Atenção", "Preencha todos os campos antes de salvar.");
            return
        }

        const eData: INotas = {
            ID: nota.ID,
            TITLE: titleValue,
            CONTENT: contentValue,
            DATE: nota.DATE
        }

        try {
            await editNotaAsync(eData);

            navigation.goBack();

            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Nota Editada com sucesso. 👋',
            });



        } catch (erro) {
            console.error("Erro em salvarNota ", erro);
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Não foi possível editar a nota. ❌',
            });
        }
    };


    return (
        <LinearGradient
            colors={['#264457', '#264f66', '#235a75', '#1d6684', '#107293']}
            style={styles.backGroud}>

            <View
                style={styles.container}>

                <View style={styles.titulo}>
                    <Text style={styles.textTitulo}>Editar Nota</Text>
                    <TouchableOpacity onPress={salvarNota}>
                        <FontAwesome name="save" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerTitulo}>
                    <TextInput
                        style={styles.inputTitulo}
                        placeholder='Título da Nota'
                        value={titleValue}
                        onChangeText={(value: string) => onChangeTextFild("Title", value)}
                    />
                </View>


                {/* Conteúdo */}
                <View style={styles.contentContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <TextInput
                            style={styles.inputContent}
                            placeholder='Digite sua nota'
                            multiline
                            scrollEnabled={true}
                            value={contentValue}
                            onChangeText={(value: string) => onChangeTextFild("Content", value)}
                        />
                    </ScrollView>
                </View>

            </View>
        </LinearGradient>
    );
};
