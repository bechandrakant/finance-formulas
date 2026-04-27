// helper
const round = (num: number): number => Math.round(num);

/**
 * Calculate present value of future money.
 *
 * Used to know today's value of future money. This is the reverse of future value calculation.
 *
 * Formula: PV = FV / (1 + r)^n
 *
 * @param futureValue Future value amount
 * @param annualRate Annual interest rate as a percentage (e.g., 5 for 5%)
 * @param years Number of years until the future value is received
 * @returns Present value of the future amount (rounded to nearest integer)
 *
 * @example
 * // Calculate present value of $1629 received after 10 years at 5% annual rate
 * presentValue(1629, 5, 10);
 * // => 1000
 */
export function presentValue(
  futureValue: number,
  annualRate: number,
  years: number,
): number {
  const r = annualRate / 100;
  const result = futureValue / Math.pow(1 + r, years);
  return round(result);
}
