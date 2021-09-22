import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToDoComponent} from "./to-do/to-do.component";
import {ToDoformComponent} from "./to-doform/to-doform.component";

const routes: Routes = [
  {path: "todolist", component: ToDoComponent},
  {path: "todoform", component: ToDoformComponent},
  {path: '', redirectTo: "todolist", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
