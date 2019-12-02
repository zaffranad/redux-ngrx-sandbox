import { AppSectorState, sectorReducer } from '../core/sectors/reducers/sector.reducer';
import { AppRouterState, routerReducer } from '../router/reducers/router.reducer';
import { AppPortfolioState, portfolioReducer } from '../core/portfolios/reducers/portfolios.reducers';

export interface AppState {
  portfolioState: AppPortfolioState;
  sectorState: AppSectorState;
  routerState: AppRouterState;
}

export const reducers = {
  portfolioState: portfolioReducer,
  sectorState: sectorReducer,
  routerState: routerReducer
};
