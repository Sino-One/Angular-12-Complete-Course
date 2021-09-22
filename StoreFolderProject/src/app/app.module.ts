import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {DossierReducer} from "./store/folder.reducer";
import {FolderEffects} from "./store/folder.effects";
import {CommonModule} from "@angular/common";
import {DossierService} from "./dossier.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({Dossiers: DossierReducer}, {}),
    EffectsModule.forRoot([FolderEffects]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DossierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
