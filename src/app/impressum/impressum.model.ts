import { Impressum } from '../shared/impressum.model';

export class Impressums {
  public headline: string;
  public text: string;

  constructor(headline: string, text: string, impressums: Impressum[]) {
    this.headline = headline;
    this.text = text;

  }
}
