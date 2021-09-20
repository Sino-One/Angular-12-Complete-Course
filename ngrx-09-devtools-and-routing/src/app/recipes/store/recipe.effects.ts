import { Actions, Effect, ofType } from '@ngrx/effects';
import {map, switchMap } from 'rxjs/operators';
import * as RecipesActions from './recipe.action';
import {Recipe} from '../recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchrecipes = this.actions$.pipe(
    ofType(
    RecipesActions.FETCH_RECIPES
  ),
    switchMap(() => {
      return this.http
        .get<Recipe[]>(
          'https://ng-course-recipe-83936-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        );
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    }));

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
