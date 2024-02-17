import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';


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

  subscriptionArticles: Subscription;
  editedItemArticle: Article;
  articlesForm: FormGroup;
  editModeArticle = false;

  constructor(
 
    private storeArticles: Store<fromAppArticles.AppState>

  ) { }

  ngOnInit() { 
   this.storeArticles.dispatch(ArticleActions.fetchArticles());

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
  }

  onSubmit(form: NgForm) {
    const value = form.value;   
    const article = new Article(value.name, value.amount);
    if (this.editModeArticle) {
      this.storeArticles.dispatch(ArticleActions.updateArticle({ article }));
    } else {
      this.storeArticles.dispatch(ArticleActions.addArticle({ article }));
    }
    this.editModeArticle = false;
    form.reset();

  }

  onClear() {
    this.slForm.reset();
    this.editModeArticle = false;
    this.storeArticles.dispatch(ShoppingListActions.stopEdit());
  }

  onDelete() {
    console.log('onDelete');
   this.storeArticles.dispatch(ArticleActions.deleteArticle());
    this.onClear();
  }

  ngOnDestroy() {
    this.subscriptionArticles.unsubscribe();
    this.storeArticles.dispatch(ArticleActions.stopEdit());
  }
}
