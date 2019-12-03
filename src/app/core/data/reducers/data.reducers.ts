import { Action, createReducer, on } from '@ngrx/store';
import { Data } from '../model/data';
import { addMarket, addSector } from '../actions/sector.actions';
import { AppDataAction } from '../actions/data.actions';

const initialState: AppDataState = {
  sectors: [],
  markets: []
};

export interface AppDataState {
  sectors: Data[];
  markets: Data[];
}

const reducer = createReducer(
  initialState,
  on(addSector, (state: AppDataState, action: Action & AppDataAction) => ({
    ...state,
    sectors: addNew(state.sectors, action)
  })),
  on(addMarket, (state: AppDataState, action: Action & AppDataAction) => ({
    ...state,
    markets: addNew(state.markets, action)
  })),
);

export function dataReducers(state: AppDataState, action: Action & AppDataAction) {
  return reducer(state, action);
}

function addNew(state: Data[], action: Action & AppDataAction) {
  const updated = [...state];
  updated.push({id: action.payload.id, name: action.payload.name});
  return updated;
}
