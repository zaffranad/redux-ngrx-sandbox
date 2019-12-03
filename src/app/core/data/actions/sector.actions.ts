import { createAction, props } from '@ngrx/store';
import { AppDataAction } from './data.actions';

export const addSector = createAction('[Sector Component] Add Sector', props<AppDataAction>());
export const addMarket = createAction('[Sector Component] Add Sector', props<AppDataAction>());

