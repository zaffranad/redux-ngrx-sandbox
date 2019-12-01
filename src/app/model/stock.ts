import { Sector } from './sector';

export class Stock {
  constructor(
    public id: string,
    public name: string,
    public eligibleSRD: boolean,
    public sector: Sector
  ) {
  }

}
