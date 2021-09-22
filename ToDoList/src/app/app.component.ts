import {Component, OnDestroy, OnInit} from '@angular/core';
import {toDo} from "./models/toDo.model";
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {SelectToDo, SelectToDoLoaded, SelectToDoLoading} from "./store/toDo.selector";
import {AddToDo, LoadToDos} from "./store/toDo.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
