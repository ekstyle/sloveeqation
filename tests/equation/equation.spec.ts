import { equationFabric, equationSlover } from '../../src/equation';
import { expect } from 'chai';
import { LinearEquation } from '../../src/equation/linear-equation';
import { SquareEquation } from '../../src/equation/square-equation';
import { Equation } from '../../src/equation/equation';

describe('EquationFabric function', () => {
  it('should return LinearEquation class', () => {
    const result = equationFabric(0, 1, 2);
    expect(result).instanceOf(Equation);
    expect(result).instanceOf(LinearEquation);
  });

  it('should return SquareEquation class', () => {
    const result = equationFabric(1, 1, 2);
    expect(result).instanceOf(Equation);
    expect(result).instanceOf(SquareEquation);
  });
});
describe('EquationSlover function', () => {
  it('linear equation 5x-10=0 (x=2)', () => {
    const result = equationSlover(0, 5, -10);
    expect(result.solve).to.equal(2);
    expect(result).not.have.property('fraction');
  });

  it('linear equation 5x+6=0 (x=-1.2)', () => {
    const result = equationSlover(0, 5, 6);
    expect(result.solve).to.equal(-1.2);
  });

  it('linear equation 3x-1=0 (x=0.3333333333333333    1/3)', () => {
    const result = equationSlover(0, 3, -1);
    expect(result.solve).to.equal(0.3333333333333333);
    expect(result.fraction).to.equal('1/3');
  });
});
