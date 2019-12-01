import { sectorReducer, SectorState } from './sector.reducer';

export interface AppState {
  sectorState: SectorState;
}

export const reducers = {
  sectorState: sectorReducer
}
