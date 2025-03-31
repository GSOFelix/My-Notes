import React, { useEffect, } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { SearchBar } from '@/components/SearchBar';
import { LinearGradient } from 'expo-linear-gradient';
import { AddButtom } from '@/components/AddButton';
import { CardNote } from '@/components/CardNote';
import { INotas } from '@/interfaces/INota';
import Toast from 'react-native-toast-message';
import { degradeTelas } from '@/theme/colors';
import { EmptyNoteAnimation } from '@/components/notasAnimation';
import { useFilter } from '@/hooks/useFilter';
import { useNoteData } from '@/hooks/useNotaData';
import { useNoteActions } from '@/hooks/useNoteActions';


export function Home() {
  const { notas, refresh } = useNoteData();
  const { itemSelected, editarNota, excluirNota, novaNota, compartilharNota } = useNoteActions();
  const { filteredData, applyFilter, updateData } = useFilter<INotas>(notas, (item, term) =>
    item.TITLE.toLowerCase().includes(term) ||
    item.CONTENT.toLowerCase().includes(term)
  );

  useEffect(() => {
    updateData(notas);
  }, [notas])

  return (

    <LinearGradient
      colors={degradeTelas.home2}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={{paddingBottom: 15}}>
          <SearchBar acao={applyFilter} />
        </View>

        {notas.length === 0 && <EmptyNoteAnimation />}


        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.ID.toString()}
          renderItem={({ item }) =>
            <CardNote
              item={item}
              onSelect={itemSelected}
              onDelete={() => excluirNota(item, refresh)}
              onEdit={editarNota}
              onShare={() => compartilharNota(item)}
            />}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={{ marginBottom: 20, paddingHorizontal: 10, paddingBottom: 80, gap: 10 }}
          showsVerticalScrollIndicator={false}
        />


        <AddButtom action={novaNota} />
      </View>
      <Toast />
    </LinearGradient>
  );
}