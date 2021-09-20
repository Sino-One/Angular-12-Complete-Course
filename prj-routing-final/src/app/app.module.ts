import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppRoutingModule } from './app-routing.module';
import {RecipeService} from './recipes/recipe.service';
import {AuthComponent} from './auth/auth.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AlertComponent} from './shared/alert/alert.component';
import {RecipesModule} from './recipes/recipes.module';
import {RecipesRoutingModule} from './recipes/recipes-routing.module';
import {SharedModule} from './shared/shared.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({logOnly: false}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [ RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ],
  exports: []
})
export class AppModule {
}
