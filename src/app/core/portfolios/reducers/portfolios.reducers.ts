import { Portfolio } from '../model/portfolio';
import { Action, createReducer, on } from '@ngrx/store';
import { AppPortfolioAction, createPortfolio, deletePortfolio, viewPortfolio } from '../actions/portfolios.actions';

export interface AppPortfolioState {
  portfolios: Portfolio[];
  viewedPortfolio: Portfolio;
}

export const initialAppPortfolioState: AppPortfolioState = {
  portfolios: [{ name: 'Mid&Small', creationDate: new Date(2000, 3, 10, 2, 3), positions: [] }],
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
  updated.push({ name: action.payload.name, creationDate: new Date(), positions: [] });
  return updated;
}

function findPortfolio(portfolios: Portfolio[], action: AppPortfolioAction): Portfolio {
  const portfolio = portfolios.find(p => p.name === action.payload.name);
  return Object.assign({}, portfolio);
}
