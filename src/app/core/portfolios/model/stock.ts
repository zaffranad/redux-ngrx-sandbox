import { Data } from '../../data/model/data';

export class Stock {
  constructor(
    public id: string,
    public name: string,
    public eligibleSRD: boolean,
    public sector: Data
  ) {
  }

}
