// helper
const round = (num: number): number => Math.round(num);

/**
 * Calculate retirement corpus needed.
 *
 * Calculates the lump sum amount required at retirement to sustain
 * monthly expenses over the retirement period, accounting for inflation
 * and investment returns.
 *
 * @param monthlyExpense Current monthly expense amount
 * @param inflationRate Annual inflation rate (as percentage, e.g., 3 for 3%)
 * @param yearsToRetirement Number of years until retirement
 * @param yearsAfterRetirement Number of years of retirement to sustain
 * @param returnRate Expected annual return rate (as percentage, e.g., 7 for 7%)
 * @returns Required retirement corpus amount (rounded)
 *
 * @example
 * // Calculate corpus needed: ₹50,000 monthly expense, 3% inflation, 20 years to retirement,
 * // 30 years after retirement, 7% returns
 * retirementCorpus(50000, 3, 20, 30, 7);
 * // => 13447265
 */
export function retirementCorpus(
  monthlyExpense: number,
  inflationRate: number,
  yearsToRetirement: number,
  yearsAfterRetirement: number,
  returnRate: number,
): number {
  const futureExpense =
    monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetirement);

  const annualExpense = futureExpense * 12;
  const r = returnRate / 100;

  return round(
    annualExpense * ((1 - Math.pow(1 + r, -yearsAfterRetirement)) / r),
  );
}
