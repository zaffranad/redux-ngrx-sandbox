import { Action, createReducer, on } from '@ngrx/store';
import { Data } from '../model/data';
import { addMarket, addSector, addStock } from '../actions/sector.actions';
import { AppDataAction, AppStockAction } from '../actions/data.actions';
import { Stock } from '../../portfolios/model/stock';

const initialState: AppDataState = {
  sectors: [
    {id: 'pharma', name: 'pharmacy'},
    {id: 'tech', name: 'technology'},
    {id: 'telecom', name: 'telecommunication'}
  ],
  markets: [
    {id: 'euro', name: 'euronext'},
    {id: 'nyse', name: 'New York Stock Exchange'},
    {id: 'nasdaq', name: 'nasdaq'}
  ],
  stocks: [
    {
      id: 'fr0000120578',
      name: 'sanofi',
      sector: {id: 'pharma', name: 'pharmacy'},
      market: {id: 'euro', name: 'euronext'}
    }
  ]
};

export interface AppDataState {
  sectors: Data[];
  markets: Data[];
  stocks: Stock[];
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
  on(addStock, (state: AppDataState, action: Action & AppStockAction) => ({
    ...state,
    stocks: addNewStock(state.stocks, action)
  })),
);

export function dataReducers(state: AppDataState, action: Action & AppDataAction) {
  return reducer(state, action);
}

function addNew(datas: Data[], action: Action & AppDataAction) {
  const updated = [...datas];
  updated.push({id: action.payload.id, name: action.payload.name});
  return updated;
}

function addNewStock(stocks: Stock[], action: Action & AppStockAction) {
  const updated = [...stocks];
  updated.push({
    id: action.payload.id,
    name: action.payload.name,
    sector: action.payload.sector,
    market: action.payload.market
  });
  return updated;
}
