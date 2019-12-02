import { createAction, props } from '@ngrx/store';

export interface AppDataAction {
  payload: {
    id: string,
    name: string
  };
}

export const addSector = createAction('[Sector Component] Add Sector', props<AppDataAction>());

