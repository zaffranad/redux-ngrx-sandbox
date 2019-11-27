import {Action, createReducer, on} from '@ngrx/store';
import {addMarket} from '../actions/ref-data.actions';
import {Market} from '../market';

const initialState: AppState = {
  markets: []
};

export interface AppState {
  markets: Array<Market>;
}

const _refDataReducer = createReducer(
  initialState,
  on(addMarket, (state, action) => ({...state, markets: addMarketToStore(state.markets, action.object)}))
);

export function refDataReducer(state: AppState, action: Action) {
  return _refDataReducer(state, action);
}


function addMarketToStore(markets: Array<Market>, market: Market) {
  const marketsUpdated = Object.assign([], markets);
  marketsUpdated.push(market);
  return marketsUpdated;
}

