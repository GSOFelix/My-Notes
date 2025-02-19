import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import { degradeTelas } from '@/theme/colors';
import { useFocusEffect } from '@react-navigation/native';
export function SearchBar({ acao }: { acao: (termo: string) => void }) {
    const [textoD, setTextoD] = useState('');

    const onChangText = (value: string) => {
        setTextoD(value)
        acao(value);
    };

    useFocusEffect(
        useCallback(() => {
            const reset = () => {
                setTextoD('')
            };
            reset();
        }, [])
    )

    return (
        <LinearGradient
            colors={degradeTelas.pesquisa}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.inputBackground}
        >
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.textInput}
                    placeholder="Pesquisar Nota"
                    placeholderTextColor="#fff"
                    value={textoD}
                    onChangeText={(value) => onChangText(value)}
                />
                <FontAwesome name="search" size={22} color="#fff" />

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 50,
        margin: 10,
        elevation: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputBackground: {
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        padding: 10,
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
    },
    textInput: {
        flex: 1,
        height: 40,
        color: '#fff',
        fontSize: 16,
    },
});