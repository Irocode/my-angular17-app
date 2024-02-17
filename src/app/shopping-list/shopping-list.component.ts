import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { Article } from '../shared/article.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as ArticlesActions from '../shopping-list/store/article.actions';
import * as fromIngredientApp from '../store/app.reducer';
import * as fromArticlesApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  articles: Observable<{ articles: Article[] }>;

  constructor(private storeArticles: Store<fromArticlesApp.AppState>,
    private storeIngredients: Store<fromIngredientApp.AppState>) {}

  ngOnInit() {
    this.ingredients = this.storeIngredients.select('shoppingList'); 
    this.articles = this.storeArticles.select('articles');       
  }

  onEditItem(index: number) {
    console.log(index);
    this.storeIngredients.dispatch(ShoppingListActions.startEdit({index}));
    this.storeArticles.dispatch(ArticlesActions.startEdit({index}));
  }

}
