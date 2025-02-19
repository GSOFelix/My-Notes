import { deleteNotaAsync, insertNotaAsync } from "@/database/useDataBase/useNotasDataBase";
import { INotas } from "@/interfaces/INota";
import { propsStack } from "@/types/navigationTypes/navigationProps";
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

export const useNoteActions = () => {
    const navigation = useNavigation<propsStack>();
    const [titleValue, setTitleValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>('');

    //Função para selecionar item
    const itemSelected = (item: INotas) => {
        navigation.navigate('NoteDetails', { nota: item })
    };

    // Função para excluir nota
    const excluirNota = async (item: INotas, onSucces: () => void) => {
        Alert.alert(
            'Atenção',
            'Deseja excluir essa Nota ?',
            [
                {
                    text: "Cancelar",
                    style: 'cancel'
                },

                {
                    text: "Sim",
                    onPress: async () => {
                        await deleteNotaAsync(item.ID);
                        onSucces();
                    },
                    style: 'destructive'
                }
            ],
            { cancelable: true }

        )
    };

    //Função para editar
    const editarNota = (item: INotas) => {
        navigation.navigate('EditNote', { nota: item });
    }

    // Nova Nota
    const novaNota = () => {
        navigation.navigate('NewNote');
    };

    // Função para salvar nova nota
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

    return {
        itemSelected,
        editarNota,
        excluirNota,
        novaNota,
        salvarNota,
        titleValue,
        setTitleValue,
        contentValue,
        setContentValue
    }
}