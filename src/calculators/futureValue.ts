// helper
const round = (num: number): number => Math.round(num);

/**
 * Calculate future value of a lump sum investment.
 *
 * Used when someone invests once and lets it grow.
 *
 * Formula: FV = P (1 + r)^n
 *
 * @param principal Initial investment amount (present value)
 * @param annualRate Annual interest rate as a percentage (e.g., 5 for 5%)
 * @param years Number of years the investment will grow
 * @returns Future value of the investment (rounded to nearest integer)
 *
 * @example
 * // Calculate future value of $1000 at 5% annual rate for 10 years
 * lumpsumFutureValue(1000, 5, 10);
 * // => 1629
 */
export function lumpsumFutureValue(
  principal: number,
  annualRate: number,
  years: number,
): number {
  const r = annualRate / 100;
  const result = principal * Math.pow(1 + r, years);
  return round(result);
}
