// ax2 + bx + c = 0
import { Solve } from './solve';
export abstract class Equation {

  constructor(protected a: number, protected b: number, protected c: number) {
    // Extreme way to correct NaN !!!!!!
    // Object.keys(this).map(item => {
    //   if (isNaN(this[item])) this[item] = 0;
    // });
  }

  abstract solve(): Solve;
}
