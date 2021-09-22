import {Action} from "@ngrx/store";
import {toDo} from "../models/toDo.model";

export enum ToDoActionTypes {
  LoadToDos = '[ToDo] Load',
  LoadToDoSuccess = '[ToDo] Load Success',
  LoadToDoError = '[ToDo] Load Error',
  AddToDo = '[ToDo] Add',
  DeleteToDo = '[ToDo] Delete',
  ModifyToDo = '[ToDo] Modify'
}

export class LoadToDos implements Action {
  readonly type = ToDoActionTypes.LoadToDos;

  constructor() {
  }
}

export class LoadToDoSuccess implements Action {
  readonly type = ToDoActionTypes.LoadToDoSuccess;

  constructor(public payload: toDo[]) {
  }
}

export class LoadToDoError implements Action {
  readonly type = ToDoActionTypes.LoadToDoError;

  constructor(public payload: any) {
  }
}

export class DeleteToDo implements Action {
  readonly type = ToDoActionTypes.DeleteToDo;

  constructor(public payload: number) {
  }
}

export class ModifyToDo implements Action {
  readonly type = ToDoActionTypes.ModifyToDo;

  constructor(public payload: toDo ) {
  }
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;

  constructor(public payload: toDo) {
  }
}

export type toDoAction = LoadToDos
  | LoadToDoSuccess
  | LoadToDoError
  | DeleteToDo
  | ModifyToDo
  | AddToDo;
