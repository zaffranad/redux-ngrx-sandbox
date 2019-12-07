import { Portfolio } from '../model/portfolio';
import { Action, createReducer, on } from '@ngrx/store';
import {
  AppPortfolioAction, AppPositionPortfolioAction,
  createPortfolio,
  createPosition,
  deletePortfolio,
  viewPortfolio
} from '../actions/portfolios.actions';

export interface AppPortfolioState {
  portfolios: Portfolio[];
  viewedPortfolio: Portfolio;
}

export const initialAppPortfolioState: AppPortfolioState = {
  portfolios: [{name: 'Mid&Small', creationDate: new Date(2000, 3, 10, 2, 3), positions: []}],
  viewedPortfolio: null
};


const reducer = createReducer(
  initialAppPortfolioState,
  on(createPortfolio, (state: AppPortfolioState, action) => ({
    ...state,
    portfolios: createAndAddPortfolio(state.portfolios, action)
  })),
  on(deletePortfolio, (state: AppPortfolioState, action) => ({
    ...state,
    portfolios: deletePortfolioFromState(state.portfolios, action)
  })),
  on(viewPortfolio, (state: AppPortfolioState, action) => ({
    ...state,
    viewedPortfolio: findPortfolio(state.portfolios, action)
  })),
  on(createPosition, (state: AppPortfolioState, action) => ({
    ...state,
    portfolios: addPosition(state.portfolios, action)
  }))
);

export function portfolioReducer(state: AppPortfolioState, action: Action & AppPortfolioAction) {
  return reducer(state, action);
}

function deletePortfolioFromState(portfolios: Portfolio[], action: AppPortfolioAction): Portfolio[] {
  const updated = [...portfolios];
  const index = updated.findIndex(value => value.name === action.payload.name);
  updated.splice(index, 1);
  return updated;
}

function createAndAddPortfolio(portfolios: Portfolio[], action: AppPortfolioAction): Portfolio[] {
  const updated = [...portfolios];
  updated.push({name: action.payload.name, creationDate: new Date(), positions: []});
  return updated;
}

function findPortfolio(portfolios: Portfolio[], action: AppPortfolioAction): Portfolio {
  const portfolio = portfolios.find(p => p.name === action.payload.name);
  return Object.assign({}, portfolio);
}

function addPosition(portfolios: Portfolio[], action: AppPositionPortfolioAction) {
  const updated = [...portfolios];
  let positions = updated.find(ptf => ptf.name === action.payload.portfolioName)
    .positions;
  if (positions == null) {
    positions = [];
  }
  positions.push(
    {
      stock: {
        id: 'fr0000120578',
        name: 'sanofi',
        sector: {id: 'pharma', name: 'pharmacy'},
        market: {id: 'euro', name: 'euronext'}
      },
      buyPrice: 10,
      buyDate: new Date(),
      volume: 1200
    }
  );
  return updated;
}
