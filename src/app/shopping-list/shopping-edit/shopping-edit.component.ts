import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromAppIngredients from '../../store/app.reducer';

import { Article } from '../../shared/article.model';
import * as ArticleActions from '../store/article.actions';
import * as fromAppArticles from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscriptionIngredients: Subscription;
  subscriptionArticles: Subscription;
  editModeIngredient = false;
  editModeArticle = false;
  editedItemIngredient: Ingredient;
  editedItemArticle: Article;

  articlesForm: FormGroup;

  constructor(
    private storeIngredients: Store<fromAppIngredients.AppState>,
    private storeArticles: Store<fromAppArticles.AppState>

  ) { }

  ngOnInit() {

    // OLD
    this.subscriptionIngredients = this.storeIngredients
      .select('shoppingList')
      .subscribe(stateData => {
        const index = stateData.editIndex;
        if (index > -1) {
          this.editModeIngredient = true;
          this.editedItemIngredient = stateData.ingredients[index];
          this.slForm.setValue({
            name: this.editedItemIngredient.name,
            amount: this.editedItemIngredient.amount
          });
        } else {
          this.editModeIngredient = false;
        }
      });
    //old

    // NEW
    this.subscriptionArticles = this.storeArticles
      .select('articles')
      .subscribe(stateData => {
        const index = stateData.editIndex;
        if (index > -1) {
          this.editModeArticle = true;
          this.editedItemArticle = stateData.articles[index];
          this.slForm.setValue({
            name: this.editedItemArticle.name,
            amount: this.editedItemArticle.amount
          });
        } else {
          this.editModeArticle = false;
        }
      });

    // NEW
  }

  onSubmit(form: NgForm) {

    // OLD
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editModeIngredient) {
      this.storeIngredients.dispatch(ShoppingListActions.updateIngredient({ ingredient }));
    } else {
      this.storeIngredients.dispatch(ShoppingListActions.addIngredient({ ingredient }));
    }
    this.editModeIngredient = false;
    form.reset();

    // OLD

    // NEW

    const valueArticle = form.value;
    const article = new Article(valueArticle.name, valueArticle.amount);
    if (this.editModeArticle) {
      this.storeArticles.dispatch(ArticleActions.updateArticle({index: 1, article: this.articlesForm.value}));
    } else {
      this.storeArticles.dispatch(ArticleActions.addArticle({ article }));
    }
    this.editModeArticle = false;
    form.reset();

  }

  onClear() {
    this.slForm.reset();
    this.editModeIngredient = false;
    this.storeIngredients.dispatch(ShoppingListActions.stopEdit());
  }

  onDelete() {
    this.storeIngredients.dispatch(ShoppingListActions.deleteIngredient());
    this.storeArticles.dispatch(ArticleActions.deleteArticle());
    this.onClear();
  }

  ngOnDestroy() {
    this.subscriptionIngredients.unsubscribe();
    this.subscriptionArticles.unsubscribe();
    this.storeIngredients.dispatch(ShoppingListActions.stopEdit());
    this.storeArticles.dispatch(ArticleActions.stopEdit());
  }
}
