import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as ArticlesActions from './article.actions';
import { Article } from '../../shared/article.model';
import * as fromApp from '../../store/app.reducer';


@Injectable()
export class ArticleEffects {

  fetchArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.fetchArticles),
      switchMap(() => {
        return this.http.get<Article[]>(
          'https://ng-course-recipe-book-ne-886bf-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
        );
      }),
      map(articles => {
        return articles.map(article => {
          return {
            ...article,
            //ingredients: article.articles ? article.articles : []
          };
        });
      }),
      map(articles => {
        return ArticlesActions.setArticles({articles});
      })
    )
  );

  storeArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActions.storeArticles),
      withLatestFrom(this.store.select('articles')),
      switchMap(([actionData, articlesState]) => {
        return this.http.put(
          'https://ng-course-recipe-book-ne-886bf-default-rtdb.europe-west1.firebasedatabase.app/articles.json',
          articlesState.articles
        );
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
