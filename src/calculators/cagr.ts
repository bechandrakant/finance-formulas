// helper
const round = (num: number): number => Math.round(num);

/**
 * Calculate Compound Annual Growth Rate (CAGR).
 *
 * Calculates the mean annual growth rate of an investment over a specified
 * period of time, assuming profits are reinvested at the end of each year.
 *
 * @param beginValue Initial investment value
 * @param endValue Final value after the period
 * @param years Time period in years
 * @returns CAGR as a percentage (rounded to nearest integer)
 *
 * @example
 * // Calculate CAGR for investment from 10000 to 20000 in 3 years
 * calculateCAGR(10000, 20000, 3);
 * // => 26 (26%)
 */
export function calculateCAGR(
  beginValue: number,
  endValue: number,
  years: number,
): number {
  const cagr = Math.pow(endValue / beginValue, 1 / years) - 1;

  return round(cagr * 100); // percentage
}
