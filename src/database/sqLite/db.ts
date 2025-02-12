import { type SQLiteDatabase } from "expo-sqlite";

export async function InitializeDataBase(db:SQLiteDatabase) {
    try{
        await db.execAsync('PRAGMA foreign_keys = ON');

        //Criar tabela de Notas
        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS NOTAS (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            TITLE TEXT NOT NULL,
            CONTENT TEXT NOT NULL,
            DATE TEXT NOT NULL
            )
            `)


    }catch (error){
        console.error('Erro ao criar tabela:',error);
    }
}