import { createAction, props } from '@ngrx/store';
import { Article } from '../../shared/article.model';


export const addArticle = createAction(
  '[Article] Add Article',
  props<{
    article: Article
  }>()
);

// export const updateArticle = createAction(
//   '[Article] Update Article',
//   props<{
//     index: number,
//     article: Article
//   }>()
// );


export const updateArticle = createAction(
  '[Article] Update Article',
  props<{
    article: Article
  }>()
);


export const deleteArticle = createAction(
  '[Article] Delete Article'
);

export const setArticles = createAction(
  '[Article] Set Articles',
  props<{
    articles: Article[]
  }>()
);

export const fetchArticles = createAction(
  '[Article] Fetch Articles'
);

export const storeArticles = createAction(
  '[Article] Store Articles'
);



export const startEdit = createAction(
  '[Article] Start Edit',
  props<{
    index: number
  }>()
);

export const stopEdit = createAction(
  '[Article] Stop Edit'
);


