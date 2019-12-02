import { Action, createReducer, on } from '@ngrx/store';
import { AppRouteAction, changeRoute } from '../actions/router.actions';

const initialAppRouterState: AppRouterState = {
  currentRoute: ''
};

export interface AppRouterState {
  currentRoute: string
}

const routerReducerHandler = createReducer(
  initialAppRouterState,
  on(changeRoute, (state: AppRouterState, action: Action & AppRouteAction) => ({...state, currentRoute: action.route }))
);

export function routerReducer(state: AppRouterState, action: Action & AppRouteAction){
  return routerReducerHandler(state, action);
}
