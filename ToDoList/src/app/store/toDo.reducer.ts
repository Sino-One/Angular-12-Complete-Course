import {toDo} from "../models/toDo.model";
import {toDoAction, ToDoActionTypes} from "./toDo.action";

export interface toDoState {
  toDos: toDo[],
  loading: boolean,
  loaded: boolean
}

export const initialState: toDoState = {
  toDos: [],
  loading: true,
  loaded: false,
}

export function toDoReducer(
  state: toDoState = initialState,
  action: toDoAction
) {
  switch(action.type) {
    case ToDoActionTypes.AddToDo:
      return {
        ...state,
        toDos: [...state.toDos, action.payload]
      };
    case ToDoActionTypes.LoadToDos:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case ToDoActionTypes.LoadToDoSuccess:
      return {
        ...state,
        toDos: action.payload,
        loading: false,
        loaded: true
      };
    case ToDoActionTypes.LoadToDoError:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case ToDoActionTypes.DeleteToDo:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => {
          return toDo.id != action.payload;
        })
      };
    case ToDoActionTypes.ModifyToDo:
      const updatedToDo = {
        ...state.toDos.filter((toDo) => {
          return toDo.id != action.payload.id;
        }),
        ...action.payload
      };

      let updatedToDos = [...state.toDos];
      updatedToDos.forEach((todo, index, todos) => {
        if (todo.id == updatedToDo.id) {
          todos[index] = updatedToDo;
        }
      });
      return {
        ...state,
        toDos: updatedToDos
      };
    default:
      return state;
  }
}
