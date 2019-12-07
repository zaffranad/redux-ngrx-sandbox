import { Data } from '../model/data';

export interface AppDataAction {
  payload: {
    id: string,
    name: string
  };
}

export interface AppStockAction {
  payload: {
    id: string,
    name: string,
    sector: Data,
    market: Data
  };
}
