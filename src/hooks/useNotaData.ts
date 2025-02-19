import { selectAllNotasAsync } from "@/database/useDataBase/useNotasDataBase";
import { INotas } from "@/interfaces/INota";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export const useNoteData = () => {

    const [notas, setNotas] = useState<INotas[]>([]);

    // Função `loadData` para carregar as notas de forma assíncrona
    const loadData = useCallback(async () => {
        try {
            const data = await selectAllNotasAsync();
            if (data) {
                setNotas(data);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    // `useFocusEffect` é um hook do React Navigation que executa a função `loadData` toda vez que a tela for focada
    useFocusEffect(useCallback(() => {
        loadData();
    }, [loadData]));

    return { notas, refresh: loadData };
};