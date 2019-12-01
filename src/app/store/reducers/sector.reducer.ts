import { createReducer, createSelector, on } from '@ngrx/store';
import { Sector } from '../../model/sector';
import { addSector } from '../actions/sector.actions';
import { AppAction } from '../actions/app.actions';

const initialState: SectorState = {
  sectors: []
};

export interface SectorState {
  sectors: Sector[];
}

const sectorReducerHandler = createReducer(
  initialState,
  on(addSector, (state: SectorState, action: AppAction) => ({...state, sectors: addNewSector(state.sectors, action)}))
);

export function sectorReducer(state: SectorState, action: AppAction) {
  return sectorReducerHandler(state, action);
}

function addNewSector(state: Sector[], action: AppAction) {
  const updated = [...state];
  updated.push({id: action.payload.id, name: action.payload.name});
  return updated;
}


const stateSelect = (state) => state.sectors;
export const sectorSelectAll = createSelector(stateSelect, s1 => s1);
