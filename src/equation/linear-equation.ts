import { Equation } from './equation';
import { Solve } from './solve';
import { reduceFraction } from './utils';

export class LinearEquation extends Equation {
  public solve(): Solve {
    // any solution
    if (this.b === 0 && this.c === 0) {
      return { solve: [], infinity: true };
    }
    // no solution
    if (this.b === 0 && this.c !== 0) {
      return { solve: [], nan: true };
    }
    const f = reduceFraction(-this.c, this.b);
    const fractionSlove: string = (f.denum === 1) ? '' : `${f.num}/${f.denum}`;
    const solveSolve = - this.c / this.b;
    return (fractionSlove === '')
      ? { solve: [solveSolve] }
      : { solve: [solveSolve], fraction: fractionSlove };
  }
}
