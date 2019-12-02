import { Action, createReducer, on } from '@ngrx/store';
import { Sector } from '../model/sector';
import { addSector, AppDataAction } from '../actions/sector.actions';

const initialState: AppSectorState = {
  sectors: []
};

export interface AppSectorState {
  sectors: Sector[];
}

const sectorReducerHandler = createReducer(
  initialState,
  on(addSector, (state: AppSectorState, action: Action & AppDataAction) => ({ ...state, sectors: addNewSector(state.sectors, action) }))
);

export function sectorReducer(state: AppSectorState, action: Action & AppDataAction) {
  return sectorReducerHandler(state, action);
}

function addNewSector(state: Sector[], action: Action & AppDataAction) {
  const updated = [...state];
  updated.push({ label: action.payload.label, name: action.payload.name });
  return updated;
}
