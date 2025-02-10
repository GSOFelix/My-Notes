import { StackNavigationProp } from "@react-navigation/stack"

export type propsNavigationStack = {
    Home: undefined,
    NoteDetails:{id:number},
    NewNote:undefined
  
}

export type propsStack = StackNavigationProp<propsNavigationStack>