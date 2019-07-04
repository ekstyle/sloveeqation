import { Equation } from './equation';
import { Solve } from './solve';
export class SquareEquation extends Equation {
  public solve(): Solve {
    const discriminant = Math.pow(this.b, 2) - 4 * this.a * this.c;
    if (discriminant > 0) {
      const solver1: number = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
      const solver2: number = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
      return { solve: [solver1, solver2] };
    }
    if (discriminant === 0) {
      const solver: number = -this.b / 2 * this.a;
      return { solve: [solver] };
    }
    return { solve: [], nan: true };
  }
}
