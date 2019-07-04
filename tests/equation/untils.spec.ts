import { reduceFraction } from '../../src/equation/utils';
import { expect } from 'chai';

describe('reduceFraction function', () => {
  it('1/3 should be 1/3', () => {
    const result = reduceFraction(1, 3);
    expect(result).to.eql({ num: 1, denum: 3 });
  });

  it('2/6 should be 1/3', () => {
    const result = reduceFraction(2, 6);
    expect(result).to.eql({ num: 1, denum: 3 });
  });

  it('-10/5 should be -2/1', () => {
    const result = reduceFraction(-10, 5);
    expect(result).to.eql({ num: -2, denum: 1 });
  });
});
