import { StockPosition } from './stock-position';

export interface Portfolio {
  name?: string;
  creationDate?: Date;
  positions?: StockPosition[];
}
