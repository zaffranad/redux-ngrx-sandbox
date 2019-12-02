import { Stock } from './stock';

export interface StockPosition {
  stock: Stock;
  volume: number;
  buyPrice: number;
  buyDate: Date;
}
