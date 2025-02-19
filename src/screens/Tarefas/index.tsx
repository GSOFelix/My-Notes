import React, { useEffect, useRef, useState } from 'react';
import { Platform, Text, TextInput, View, } from 'react-native';
import { styles } from './styles';
import { EmptyTaskAnimation } from '@/components/tarefasAnimation';
import { LinearGradient } from 'expo-linear-gradient';
import { degradeTelas } from '@/theme/colors';
import { AddButtom } from '@/components/AddButton';
import { ITarefas } from '@/interfaces/ITarefas';
import { Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';


export function Tarefas() {
  const [tarefas, setTarefa] = useState<ITarefas[]>([]);
  const [visible, setModalVisible] = useState<boolean>(false);
  const [showPicker, setShowPicker] = useState(false);
  const [date,setDate] = useState(new Date());
  const [dataEmissao,setDataEmissao ] = useState('')
  const inputRef = useRef<TextInput>(null);

  const ToggleDate = () => {
    setShowPicker(!showPicker)
  };

  const closeModal = () => {
    setModalVisible(false)
  };

  const onChangeDefinicao = (event: DateTimePickerEvent, selectedDate?: Date) =>{
    if (event.type === "set" && selectedDate){
        const currentDate  = selectedDate
        setDate(currentDate)

        if(Platform.OS === "android"){
            ToggleDate();
            setDataEmissao(currentDate .toLocaleDateString());
        }
    }else{
        ToggleDate();
    }
}

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        inputRef.current?.focus(); // Foca no input quando o modal abre
      }, 400); // Pequeno delay para garantir que o modal está renderizado
    }
  }, [visible]);

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={degradeTelas.home2}
    >

      <View style={styles.container}>
        {tarefas.length === 0 && <EmptyTaskAnimation />}

        <AddButtom action={() => setModalVisible(true)} />
      </View>

      <Modal
        visible={visible}
        transparent
        animationType='slide'
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              ref={inputRef}
              placeholder='Digite sua tarefa'
            />

            {showPicker && (
              <DateTimePicker
                mode='date'
                display='spinner'
                value={date}
                onChange={onChangeDefinicao} />
            )}

            <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}>

              <TouchableOpacity
                onPress={closeModal}
                style={{ padding: 10, backgroundColor: 'red', borderRadius: 25 }} >
                <Text style={{ fontSize: 16 }}>Concluido</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={ToggleDate}
                style={{ padding: 10, backgroundColor: 'red', borderRadius: 25 }} >
                <Text style={{ fontSize: 16 }}>Definir data</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>

  );
}