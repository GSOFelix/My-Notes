import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { SearchBar } from '@/components/SearchBar';
import { LinearGradient } from 'expo-linear-gradient';
import { AddButtom } from '@/components/AddButton';
import { notasfakes } from '@/dataFake/data';
import { CardNote } from '@/components/CardNote';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '@/types/navigationTypes/navigationProps';
export function Home() {

  const navigation = useNavigation<propsStack>();

  const [filteredData, setFilteredData] = useState(notasfakes);

  // Função para filtrar notas
  const filterData = (termo: string) => {
    if (!termo) {
      setFilteredData(notasfakes); 
    } else {
      const dataFiltrada = notasfakes.filter(
        (nota) =>
          nota.title.toLowerCase().includes(termo.toLowerCase()) ||
          nota.content.toLowerCase().includes(termo.toLowerCase())
      );
      setFilteredData(dataFiltrada);
    }
  };
  
  return (
    <LinearGradient
      colors={['#6D51A5', '#E4A7C5']} 
      style={styles.background}
    >
      <View style={styles.container}>
        <SearchBar acao={filterData} />

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardNote item={item} />}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={{ marginBottom: 20, paddingHorizontal: 10, paddingBottom: 80 }}
        />

        <AddButtom action={() => navigation.navigate('NewNote')} />
      </View>

    </LinearGradient>
  );
}