import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as ImpressumsActions from './impressum.actions';
import { Impressums } from '../impressum.model';
import * as fromApp from '../../store/app.reducer';


@Injectable()
export class ImpressumEffects {

  fetchImpressums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImpressumsActions.fetchImpressums),
      switchMap(() => {
        return this.http.get<Impressums[]>(
          'https://ng-course-recipe-book-ne-886bf-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        );
      }),
      map(impressums => {
        return impressums.map(impressum => {
          return {
            ...impressum,
            ingredients: impressum.headline ? impressum.text : []
          };
        });
      }),
      map(impressums => {
        return ImpressumsActions.setImpressums({impressums});
      })
    )
  );

  storeImpressums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ImpressumsActions.storeImpressums),
      withLatestFrom(this.store.select('impressum')),
      switchMap(([actionData, impressumsState]) => {
        return this.http.put(
          'https://ng-course-recipe-book-ne-886bf-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
          impressumsState.impressums
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
