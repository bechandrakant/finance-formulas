/**
 * Calculate the inflation-adjusted real return from a nominal return.
 *
 * @param nominalRate Annual nominal return in percentage
 * @param inflationRate Annual inflation rate in percentage
 * @returns Real return as a percentage
 *
 * @example
 * calculateRealReturn(10, 5);
 * // => 4.761904761904762
 */
export function calculateRealReturn(
  nominalRate: number,
  inflationRate: number,
): number {
  const n = nominalRate / 100;
  const i = inflationRate / 100;

  const realReturn = (1 + n) / (1 + i) - 1;

  return realReturn * 100;
}
