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
        id: 1,
        content: 'Faire des pates',
        done: true
      },
      {
        id: 2,
        content: 'Tirer la chasse',
        done: true
      },
      {
        id: 3,
        content: "Monter l'escalier",
        done: true
      },
      {
        id: 4,
        content: 'Se cuire un oeuf',
        done: false
      },
    ]).pipe(delay(500));
  }

  constructor() { }
}
