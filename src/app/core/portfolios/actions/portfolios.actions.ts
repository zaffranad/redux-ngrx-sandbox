import { createAction, props } from '@ngrx/store';

export interface AppPortfolioAction {
  payload: {
    name: string
  };
}

export const createPortfolio = createAction('[Portfolio Component] Create portfolio', props<AppPortfolioAction>());
export const deletePortfolio = createAction('[Portfolio Component] Delete portfolio', props<AppPortfolioAction>());
export const viewPortfolio = createAction('[Portfolio Component] View portfolio', props<AppPortfolioAction>());
