import { Action, createAction, props } from '@ngrx/store';
import { Sector } from '../sector';

export const addSector = createAction('[Sector Component] Add Sector', props<ActionPayload>());
export const selectSectors = createAction('[Sector Component] Select All Sectors');

export interface AppAction extends Action {
  payload: {
    id: string,
    name: string
  };
}

export interface ActionPayload {
  payload: {
    id: string,
    name: string
  };
}
