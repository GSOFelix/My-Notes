import React, { useCallback, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { SearchBar } from '@/components/SearchBar';
import { LinearGradient } from 'expo-linear-gradient';
import { AddButtom } from '@/components/AddButton';
import { CardNote } from '@/components/CardNote';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { propsStack } from '@/types/navigationTypes/navigationProps';
import { INotas } from '@/interfaces/INota';
import Toast from 'react-native-toast-message';
import { deleteNotaAsync, selectAllNotasAsync } from '@/database/useDataBase/useNotasDataBase';;
import LottieView from 'lottie-react-native';
import {degradeTelas } from '@/theme/colors';


export function Home() {

  const navigation = useNavigation<propsStack>();

  const [filteredData, setFilteredData] = useState<INotas[]>([]);
  const [notas, setNotas] = useState<INotas[]>([]);

  // Função para filtrar notas
  const filterData = (termo: string) => {
    if (!termo) {
      setFilteredData(notas);
    } else {
      const dataFiltrada = notas.filter(
        (nota) =>
          nota.TITLE.toLowerCase().includes(termo.toLowerCase().trim()) ||
          nota.CONTENT.toLowerCase().includes(termo.toLowerCase().trim())
      );
      setFilteredData(dataFiltrada);
    }
  };

  //Função para selecionar item
  const itemSelected = (item: INotas) => {
    navigation.navigate('NoteDetails', { nota: item })
  };

  // Função para excluir nota
  const excluirNota = async (item: INotas) => {
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
            setFilteredData(filteredData.filter((prevItem) => prevItem.ID !== item.ID))
            setNotas(notas.filter((prevItem) => prevItem.ID !== item.ID))
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

  // CallBack de atualizar lista de Notas.
  useFocusEffect(
    useCallback(() => {
      const carregarDados = async () => {
        try {
          const notas = await selectAllNotasAsync();
          console.log(notas)
          if (notas) {
            setNotas(notas)
            setFilteredData(notas)
          }
        } catch (erro) {
          console.error(erro);
        }
      };

      carregarDados();
      
    }, [])
  )

  return (

    <LinearGradient
      colors={degradeTelas.home2}
      style={styles.background}
    >
      <View style={styles.container}>

        <SearchBar acao={filterData} />

        {notas.length === 0 &&
          (

            <View style={styles.animationContainer}>
              <LottieView
                source={require('@/assets/animations/emptyNote.json')}
                autoPlay={true}
                loop={false}
                style={{ width: 250, height: 250 }}
              />
              <Text style={styles.textAnimation}>Adicione a sua primeira nota!</Text>
            </View>
          )

        }
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.ID.toString()}
          renderItem={({ item }) =>
            <CardNote
              item={item}
              onSelect={itemSelected}
              onDelete={excluirNota}
              onEdit={editarNota}
            />}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={{ marginBottom: 20, paddingHorizontal: 10, paddingBottom: 80 }}
          showsVerticalScrollIndicator={false} />


        <AddButtom action={() => navigation.navigate('NewNote')} />
      </View>
      <Toast />
    </LinearGradient>
  );
}