import { Action, createReducer, on } from '@ngrx/store';
import { Impressum } from '../../shared/impressum.model';
import * as ImpressumActions from './impressum.actions';


export interface State {
  impressums: Impressum[];
  editIndex: number;
}

const initialState: State = {
  impressums: [
    new Impressum('Thomas', 'Das ist ein Test 1'),
    new Impressum('BerndImpressum', 'Das ist ein Test 2')
  ],
  editIndex: -1
};

const _impressumReducer = createReducer(

  initialState,

  on(
    ImpressumActions.addImpressum,
    (state, action) => ({
      ...state,
      impressums: state.impressums.concat(action.impressum)
    })
  ),

  on(
    ImpressumActions.addImpressums,
    (state, action) => ({
      ...state,
      impressums: state.impressums.concat(...action.impressums)
    })
  ),

  on(
    ImpressumActions.updateImpressum,
    (state, action) => ({
      ...state,
      editIndex: -1,
      impressums: state.impressums.map(
        (impressum, index) => index === state.editIndex ? { ...action.impressum } : impressum
      )
    })
  ),

  on(
    ImpressumActions.deleteImpressum,
    (state) => ({
      ...state,
      editIndex: -1,
      impressums: state.impressums.filter(
        (_, index) => index !== state.editIndex
      )
    })
  ),

  on(
    ImpressumActions.startEdit,
    (state, action) => ({
      ...state, editIndex:
      action.index
    })
  ),

  on(
    ImpressumActions.stopEdit,
    (state) => ({
      ...state, editIndex: -1
    })
  )
);

export function impressumReducer(state: State, action: Action) {
  return _impressumReducer(state, action);
}
