import { createAction, props } from '@ngrx/store';
import { ActionPayload } from './app.actions';

export const addSector = createAction('[Sector Component] Add Sector', props<ActionPayload>());
export const selectSectors = createAction('[Sector Component] Select All Sectors');
