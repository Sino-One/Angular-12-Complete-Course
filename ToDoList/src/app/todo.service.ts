import { Injectable } from '@angular/core';
import {toDo} from "./models/toDo.model";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  findAll(): Observable<toDo[]> {
    return of([
      {
        id: 0,
        content: 'Faire des pates',
        done: true
      },
      {
        id: 1,
        content: 'Tirer la chasse',
        done: false
      },
      {
        id: 2,
        content: "Monter l'escalier",
        done: true
      },
      {
        id: 3,
        content: 'Se cuire un oeuf',
        done: false
      },
    ]).pipe(delay(500));
  }

  constructor() { }
}
