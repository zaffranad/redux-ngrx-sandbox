import { createAction, props } from '@ngrx/store';
import { AppDataAction, AppStockAction } from './data.actions';

export const addSector = createAction('[Data Component] Add Sector', props<AppDataAction>());
export const addMarket = createAction('[Data Component] Add Market', props<AppDataAction>());
export const addStock = createAction('[Data Component] Add Stock', props<AppStockAction>());

