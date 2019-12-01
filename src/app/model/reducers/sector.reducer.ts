import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { Sector } from '../sector';
import { addSector, AppAction } from '../actions/sector.actions';

const initialState = [{id: 'll', name: 'fefzgze'}];

const sectorReducerHandler = createReducer(
  initialState,
  on(addSector, (state: Sector[], action: AppAction) => (addNewSector(state, action)))
);

export function sectorReducer(state: Sector[], action: AppAction) {
  return sectorReducerHandler(state, action);
}

function addNewSector(state: Sector[], action: AppAction) {
  const updated = [...state];
  updated.push({id: action.payload.id, name: action.payload.name});
  return updated;
}


const stateSelect = (state) => state.sectors;
export const sectorSelectAll = createSelector(stateSelect, s1 => s1);
