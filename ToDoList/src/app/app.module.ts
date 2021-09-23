import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {ToDoEffects} from "./store/toDo.effects";
import {toDoReducer} from "./store/toDo.reducer";
import {TodoService} from "./todo.service";
import { ToDoformComponent } from './to-doform/to-doform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ToDoComponent } from './to-do/to-do.component';
import {RouterModule} from "@angular/router";
import { SwitchComponent } from './switch/switch.component';
import {CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    ToDoformComponent,
    ToDoComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ToDoEffects]),
    StoreModule.forRoot({Todo: toDoReducer}, {}),
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
