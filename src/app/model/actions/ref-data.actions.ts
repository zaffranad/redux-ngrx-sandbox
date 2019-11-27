import {createAction, props} from '@ngrx/store';
import {RefData} from '../ref-data';

export interface RefDataAction {
  object: RefData
}

export const addMarket = createAction('[Market Component] Add Market', props<RefDataAction>());
export const removeMarket = createAction('[Market Component] Remove Market');
export const editMarket = createAction('[Market Component] Edit Market');

export const addSector = createAction('[Sector Component] Add Sector');
export const removeSector = createAction('[Sector Component] Remove Sector');
export const editSector = createAction('[Sector Component] Edit Sector');



