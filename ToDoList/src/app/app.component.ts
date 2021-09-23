import {Component, OnDestroy, OnInit} from '@angular/core';
import {toDo} from "./models/toDo.model";
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {SelectToDo, SelectToDoLoaded, SelectToDoLoading} from "./store/toDo.selector";
import {AddToDo, LoadToDos} from "./store/toDo.action";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(private toDoService: TodoService) {
    this.toDoService.initToDos();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
