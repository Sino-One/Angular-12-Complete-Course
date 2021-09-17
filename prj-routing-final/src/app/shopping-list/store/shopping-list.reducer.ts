import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';
import {Action} from "@ngrx/store";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
  ) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index]; // L'ingrédient initial
      const updatedIngredient = {
        ...ingredient, // Not necessary
        ...action.payload.ingredient
      };
      const updatedIngredients = [...state.ingredients]; // Les ingrédients initiaux
      updatedIngredients[action.payload.index] = updatedIngredient; // Le tableau d'ingrédients avec l'ingrédient mis à jour
      return {
        ...state,
        ingredients: updatedIngredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== action.payload;
        //  return state.ingredients[action.payload] === ig ? true : false;
        })
      };
    default:
      return state;
  }
}
