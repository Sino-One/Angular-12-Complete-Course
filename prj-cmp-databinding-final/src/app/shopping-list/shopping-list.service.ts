import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
   //   this.addIngredient(ingredient);
  //  }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
