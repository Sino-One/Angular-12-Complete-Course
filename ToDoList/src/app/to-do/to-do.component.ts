import {Component, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {toDo} from "../models/toDo.model";
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {SelectToDo, SelectToDoLoaded, SelectToDoLoading} from "../store/toDo.selector";
import {AddToDo, DeleteToDo, LoadToDos} from "../store/toDo.action";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnDestroy {

  toDos: toDo[] = [];
  loading = true;
  loaded = false;
  loaded$ = new Observable<boolean>();
  loading$ = new Observable<boolean>();
  toDo$ = new Observable<toDo[]>();

  subcription: Subscription[] = [];

  constructor(private store: Store) {
    this.toDo$ = this.store.pipe(select(SelectToDo));
    this.loading$ = this.store.select(SelectToDoLoading);
    this.loaded$ = this.store.select(SelectToDoLoaded);
  }

  ngOnInit() {
    this.subcription.push(this.toDo$.subscribe(todos => this.toDos = todos));
    this.subcription.push(this.loading$.subscribe(loadingState => this.loading = loadingState));
    this.subcription.push(this.loaded$.subscribe(loadedState => this.loaded = loadedState));
    this.store.dispatch(new LoadToDos());
  }

  ngOnDestroy() {
    this.subcription.forEach((sub)=> sub.unsubscribe());
  }

  onSave(event: toDo) {
    this.store.dispatch(new AddToDo(event));
  }

  onDelete(id: number) {
    this.store.dispatch(new DeleteToDo(id));
  }

}
