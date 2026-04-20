/**
 * Estimate years required to double money using the Rule of 72.
 *
 * The Rule of 72 is a simple formula that estimates how long it will take
 * for an investment to double in value at a given annual interest rate.
 * It's a quick mental math approximation that's surprisingly accurate
 * for interest rates between 5% and 10%.
 *
 * @param rate Annual interest rate (in percentage, e.g., 7 for 7%)
 * @returns Estimated years to double the investment
 *
 * @example
 * // At 7% annual return, money doubles in about 10.29 years
 * timeToDouble(7);
 * // => 10.285714285714286
 *
 * @example
 * // At 8% annual return, money doubles in about 9 years
 * timeToDouble(8);
 * // => 9
 */
export function timeToDouble(rate: number): number {
  return 72 / rate;
}