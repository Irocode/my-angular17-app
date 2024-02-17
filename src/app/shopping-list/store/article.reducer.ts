import { Action, createReducer, on } from '@ngrx/store';
import { Article } from '../../shared/article.model';
import * as ArticlesActions from './article.actions';


export interface State {
  articles: Article[];
  editIndex: number; // Neu
}

const initialState: State = {
  articles: [
    new Article('AppleArticle', 5),
    new Article('TomatoesArticle', 10)
  ],
  editIndex: -1
};

const _articleReducer = createReducer(

  initialState,



  /*

  on(
    ArticlesActions.addArticle,
    (state, action) => ({
      ...state,
      articles: state.articles.concat({ ...action.article })
    })
  ),

  on(
    ArticlesActions.updateArticle,
    (state, action) => ({
      ...state,
      articles: state.articles.map(
        (article, index) => index === action.index ? { ...action.article } : article
      )
    })
  ),
*/

  on(
    ArticlesActions.addArticle,
    (state, action) => ({
      ...state,
      articles: state.articles.concat({ ...action.article })
    })
  ),

 

  on(
    ArticlesActions.updateArticle,
    (state, action) => ({
      ...state,
      editIndex: -1,
      articles: state.articles.map(
        (article, index) => index === state.editIndex ? { ...action.article } : article
      )
    })
  ),


  on(
    ArticlesActions.deleteArticle,
    (state) => ({
      ...state,
      editIndex: -1,
      articles: state.articles.filter(
        (_, index) => index !== state.editIndex
      )
    })
  ),

  on(
    ArticlesActions.setArticles,
    (state, action) => ({
      ...state,
      articles: [...action.articles]
    })
  ),

  on(
    ArticlesActions.startEdit,
    (state, action) => ({
      ...state, editIndex:
        action.index
    })
  ),

  on(
    ArticlesActions.stopEdit,
    (state) => ({
      ...state, editIndex: -1
    })
  )

);

export function articleReducer(state: State, action: Action) {
  return _articleReducer(state, action);
}
