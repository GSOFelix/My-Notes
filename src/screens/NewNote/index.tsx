import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';
import { INotas } from '@/interfaces/INota';
import { insertNotaAsync } from '@/database/useDataBase/useNotasDataBase';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '@/types/navigationTypes/navigationProps';
import { appColors } from '@/theme/colors';

export function NewNote() {
    const navigation = useNavigation<propsStack>();
    const [titleValue, setTitleValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>('');

    const onChangeTextFild = (field: string, value: string) => {
        if (field === 'Title') {
            setTitleValue(value);
        } else {
            setContentValue(value);
        }
    };

    const salvarNota = async () => {
        // Verificar se os campos estão em branco
        if (!titleValue && !contentValue) {
            Alert.alert("Atenção", "Preencha todos os campos antes de salvar.");
            return
        }
        // Monta objeto Notas
        const data: Omit<INotas, "ID"> = {
            TITLE: titleValue,
            CONTENT: contentValue,
            DATE: new Date().toISOString()
        };

        try {
            // Insere no banco de dados
            await insertNotaAsync(data);

            // Retorna para tela inicial
            navigation.goBack();

            // Mostra a mensagem de sucesso 
            Toast.show({
                type: 'success',
                text1: 'Sucesso!',
                text2: 'Nota criada com sucesso. 👋',
            });



        } catch (erro) {
            console.error("Erro em salvarNota ", erro);
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Não foi possível salvar a nota. ❌',
            });
        }
    };


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
                        onChangeText={(value: string) => onChangeTextFild("Title", value)}
                    />
                </View>

                <View style={styles.containerConteudo}>
                    <TextInput
                        style={styles.inputConteudo}
                        placeholder='Digite sua nota'
                        multiline={true}
                        value={contentValue}
                        onChangeText={(value: string) => onChangeTextFild("Content", value)}
                    />
                </View>

            </View>

        </LinearGradient>
    );
};
