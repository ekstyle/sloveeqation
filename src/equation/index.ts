import { Equation } from './equation';
import { SquareEquation } from './square-equation';
import { LinearEquation } from './linear-equation';
import { reduceFraction } from './utils';
import { Solve } from './solve';

export function equationFabric(a: number, b: number, c: number): Equation {
  return (a === 0) ? new LinearEquation(a, b, c) : new SquareEquation(a, b, c);
}
export function equationSlover(a: number, b: number, c: number): Solve {
  const eq: Equation = equationFabric(a, b, c);
  console.log(eq);
  return eq.solve();
}
