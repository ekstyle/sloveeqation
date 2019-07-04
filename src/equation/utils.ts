export function reduceFraction(numerator: number, denominator: number){
  for (let i = Math.abs(numerator); i > 0; i -= 1) {
    if (numerator % i === 0 && denominator % i === 0) {
      const n = (numerator / i);
      const d = (denominator / i);
      return { num: n, denum: d };
    }
  }
  return { num: numerator, denum: denominator };
}
