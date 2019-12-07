import { createAction, props } from '@ngrx/store';

export interface AppPortfolioAction {
  payload: {
    name: string
  };
}

export interface AppPositionPortfolioAction {
  payload: {
    portfolioName: string;
    stockId: string;
    buyDate: string;
    buyPrice: number
    volume: number;
  };
}

export const createPortfolio = createAction('[Portfolio Component] Create portfolio', props<AppPortfolioAction>());
export const deletePortfolio = createAction('[Portfolio Component] Delete portfolio', props<AppPortfolioAction>());
export const viewPortfolio = createAction('[Portfolio Component] View portfolio', props<AppPortfolioAction>());

export const createPosition = createAction('[Portfolio Component] Create position', props<AppPositionPortfolioAction>());
