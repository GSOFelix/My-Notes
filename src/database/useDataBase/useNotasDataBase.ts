import { DB_NAME } from '@/constant/dbConstants';
import { INotas } from '@/interfaces/INota';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync(DB_NAME);

// Inserir nova nota
export async function insertNotaAsync(data: Omit<INotas, 'ID'>) {
    const query = (await db).prepareAsync(`INSERT INTO NOTAS (TITLE,CONTENT,DATE) VALUES (?,?,?)`);

    try {
        const result = (await query).executeAsync([
            data.TITLE,
            data.CONTENT,
            data.DATE
        ])

        return (await result).lastInsertRowId.toString()
    } catch (error) {
        console.error('Erro em insertNotaAsync ', error)
    }
};

// Editar nota
export async function editNotaAsync(data: INotas) {
    const query = (await db).prepareAsync('UPDATE NOTAS SET TITLE = ?, CONTENT = ? WHERE ID = ?')
    try {
        (await query).executeAsync([
            data.TITLE,
            data.CONTENT,
            data.ID
        ]);
    }catch (error){
        console.error('Erro em editNotaAsync, ',error)
    }
};

// Selecionar uma nota

// Selecionar todas as notas
export async function selectAllNotasAsync() {
    try {
        const statement = (await db).getAllAsync<INotas>(`SELECT * FROM NOTAS`)
        return statement;
    }
    catch (error) {
        console.error('Erro em selectAllNotas ', error)
    }

};

// Excluir uma nota 
export async function deleteNotaAsync(id: number) {
    const query = (await db).prepareAsync('DELETE FROM NOTAS WHERE ID = ?')
    try {
        (await query).executeAsync(id);
    } catch (error) {
        console.error("Erro em deleteNotasAsync", error);
    }
};