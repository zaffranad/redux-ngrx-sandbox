import { Sector } from './sector';
import { Market } from './Market';

export class Stock {
  constructor(
    public id: string,
    public name: string,
    public eligibleSRD: boolean,
    public sector: Sector,
    public market: Market
  ) {

  }

}
