import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Impressums } from './impressum.model';
import * as fromApp from '../store/app.reducer';
import * as impressumsActions from './store/impressum.actions';

@Injectable({ providedIn: 'root' })
export class ImpressumsResolverService implements Resolve<{impressums: Impressums[]}> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.store.select('impressum').pipe(
      take(1),
      map(impressumState => {
        return impressumState.impressums;
      }),
      switchMap(impressums => {
        if (impressums.length === 0) {
          this.store.dispatch(impressumsActions.fetchImpressums());
          return this.actions$.pipe(
            ofType( impressumsActions.setImpressums),
            take(1)
          );
        } else {
          return of({impressums});
        }
      })
    );
  }
}
