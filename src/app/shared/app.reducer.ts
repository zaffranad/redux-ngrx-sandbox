import { sectorReducer, AppSectorState } from '../core/sectors/reducers/sector.reducer';
import { AppRouterState, routerReducer } from '../router/reducers/router.reducer';

export interface AppState {
  sectorState: AppSectorState;
  routerState: AppRouterState;
}

export const reducers = {
  sectorState: sectorReducer,
  routerState: routerReducer
};
