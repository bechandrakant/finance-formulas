// helper
const round = (num: number): number => Math.round(num);

/**
 * Result object for FD (Fixed Deposit) calculation.
 * @interface FDResult
 * @property maturityAmount Final amount at maturity
 * @property interestEarned Total interest earned
 */
export interface FDResult {
  maturityAmount: number;
  interestEarned: number;
}

/**
 * Calculate Fixed Deposit (FD) maturity amount.
 *
 * Calculates the maturity amount and interest earned on a fixed deposit
 * investment using compound interest formula.
 *
 * @param principal Initial deposit amount
 * @param annualRate Annual interest rate (in %)
 * @param years Deposit period in years
 * @returns FDResult object containing maturityAmount and interestEarned
 *
 * @example
 * // Calculate FD maturity for 100000 at 7% for 5 years
 * calculateFD(100000, 7, 5);
 * // => { maturityAmount: 140255, interestEarned: 40255 }
 */
export function calculateFD(
  principal: number,
  annualRate: number,
  years: number,
): FDResult {
  const r = annualRate / 100;
  const maturityAmount = principal * Math.pow(1 + r, years);
  const interestEarned = maturityAmount - principal;

  return {
    maturityAmount: round(maturityAmount),
    interestEarned: round(interestEarned),
  };
}
