import { createAction, props } from '@ngrx/store';

export interface AppRouteAction {
  route: string;
}

export const changeRoute = createAction('[Router Component] Change Route', props<AppRouteAction>());

