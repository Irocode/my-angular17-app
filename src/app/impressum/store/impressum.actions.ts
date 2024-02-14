import { createAction, props } from '@ngrx/store';
import { Impressum } from '../../shared/impressum.model';


export const addImpressum = createAction(
  '[Impressum] Add Impressum',
  props<{
    impressum: Impressum
  }>()
);

export const addImpressums = createAction(
  '[Impressum] Add Impressums',
  props<{
    impressums: Impressum[]
  }>()
);

export const updateImpressum = createAction(
  '[Impressum] Update Impressum',
  props<{
    impressum: Impressum
  }>()
);

export const deleteImpressum = createAction(
  '[Impressum] Delete Impressum'
);

export const startEdit = createAction(
  '[Impressum] Start Edit',
  props<{
    index: number
  }>()
);

export const stopEdit = createAction(
  '[Impressum] Stop Edit'
);

export const fetchImpressums = createAction(
  '[Impressum] Fetch Impressum'
);

export const storeImpressums = createAction(
  '[Impressum] Store Impressum'
);

export const setImpressums = createAction(
  '[Impressum] Set Impressum',
  props<{
    impressums: Impressum[]
  }>()
);
