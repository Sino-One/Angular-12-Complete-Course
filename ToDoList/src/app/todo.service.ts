import { Injectable } from '@angular/core';
import {toDo} from "./models/toDo.model";
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {SelectToDo, SelectToDoLoaded, SelectToDoLoading} from "./store/toDo.selector";
import {AddToDo, DeleteToDo, LoadToDos, ModifyToDo} from "./store/toDo.action";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  loaded$ = new Observable<boolean>();
  loading$ = new Observable<boolean>();
  toDo$ = new Observable<toDo[]>();

  findAll(): Observable<toDo[]> {
    return of([
      {
        id: 0,
        content: 'Faire des pates',
        done: true
      },
      {
        id: 1,
        content: 'Attraper la lune',
        done: true
      },
      {
        id: 2,
        content: "Master NgRx",
        done: false
      },
      {
        id: 3,
        content: 'Se cuire un oeuf',
        done: false
      },
    ]).pipe(delay(500));
  }

  constructor(private store: Store) {
    this.toDo$ = this.store.select(SelectToDo);
    this.loading$ = this.store.select(SelectToDoLoading);
    this.loaded$ = this.store.select(SelectToDoLoaded);
  }

  onModify(value: toDo) {
    this.store.dispatch(new ModifyToDo(value));
  }

  initToDos() {
    this.store.dispatch(new LoadToDos());
  }

  onSave(toDo: toDo) {
    this.store.dispatch(new AddToDo(toDo));
  }

  onDelete(id: number) {
    this.store.dispatch(new DeleteToDo(id));
  }

}
