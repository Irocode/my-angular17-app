import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipes from '../recipes/store/recipe.reducer';
import * as fromArticles from '../shopping-list/store/article.reducer';


export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  recipes: fromRecipes.State;
  articles: fromArticles.State; 
}



// export const appReducer: ActionReducerMap<AppState> = {
//   shoppingList: fromShoppingList.shoppingListReducer,
//   auth: fromAuth.authReducer,
//   recipes: fromRecipes.recipeReducer
// };
