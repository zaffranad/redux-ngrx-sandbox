import { AppDataState, dataReducers } from '../core/data/reducers/data.reducers';
import { AppRouterState, routerReducer } from '../router/reducers/router.reducer';
import { AppPortfolioState, portfolioReducer } from '../core/portfolios/reducers/portfolios.reducers';

export interface AppState {
  portfolioState: AppPortfolioState;
  sectorState: AppDataState;
  routerState: AppRouterState;
}

export const reducers = {
  portfolioState: portfolioReducer,
  sectorState: dataReducers,
  routerState: routerReducer
};
