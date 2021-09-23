import {Component, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {toDo} from "../models/toDo.model";
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {SelectToDo, SelectToDoLoaded, SelectToDoLoading} from "../store/toDo.selector";
import {AddToDo, DeleteToDo, LoadToDos} from "../store/toDo.action";
import {TodoService} from "../todo.service";
import {MatDialog} from "@angular/material/dialog";
import {ToDoformComponent} from "../to-doform/to-doform.component";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnDestroy {

  toDos: toDo[] = [];
  loading = true;
  loaded = false;

  subcription: Subscription[] = [];
  toDo$: Observable<toDo[]>;

  constructor(public toDoService: TodoService, public dialog: MatDialog, private store: Store) {
  }

  ngOnInit() {
    this.toDo$ = this.store.select(SelectToDo);
    this.subcription.push(this.toDo$.subscribe(todos => this.toDos = todos));
    this.subcription.push(this.toDoService.loading$.subscribe(loadingState => this.loading = loadingState));
    this.subcription.push(this.toDoService.loaded$.subscribe(loadedState => this.loaded = loadedState));

    console.log(this.toDos);
  }

  ngOnDestroy() {
    this.subcription.forEach((sub)=> sub.unsubscribe());
  }

  onSave(toDo: toDo) {
    this.toDoService.onSave(toDo);
  }

  onDelete(id: number) {
    this.toDoService.onDelete(id);
  }

  openDialog(todo: toDo) {
    const dialogRef = this.dialog.open(ToDoformComponent, {
      data: {id: todo.id, content: todo.content, done: todo.done}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
