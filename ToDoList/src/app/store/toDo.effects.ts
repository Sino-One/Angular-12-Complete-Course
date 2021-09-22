import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoadToDoError, LoadToDos, LoadToDoSuccess, ToDoActionTypes} from "./toDo.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {TodoService} from "../todo.service";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ToDoEffects {
  constructor(private actions$: Actions, private toDoService: TodoService) {
  }

  loadEffect$ = createEffect(()=>
    this.actions$.pipe(
      ofType<LoadToDos>(ToDoActionTypes.LoadToDos),
      switchMap((action) => this.toDoService.findAll().pipe(
        map(todos => {
          return new LoadToDoSuccess(todos);
        }),
        catchError((error) => of(new LoadToDoError(error)))
      ))
    )
  )
}
