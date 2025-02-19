import { INotas } from "@/interfaces/INota";
import { StackNavigationProp } from "@react-navigation/stack"

export type propsNavigationStack = {
    Tabs:undefined,
    Home: undefined,
    Tarefas:undefined,
    NewNote:undefined,
    NoteDetails:{
        nota:INotas
    },
    EditNote:{
        nota:INotas
    }
    
  
}

export type propsStack = StackNavigationProp<propsNavigationStack>