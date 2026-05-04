// helper
const round = (num: number): number => Math.round(num);

/**
 * Calculate compound value with variable yearly returns.
 *
 * Used when investment returns fluctuate year to year, providing a more realistic
 * view of compounding in real-world scenarios.
 *
 * Formula: Final Value = Principal × (1 + r₁) × (1 + r₂) × ... × (1 + rₙ)
 *
 * @param principal Initial investment amount
 * @param yearlyReturns Array of annual returns as percentages (e.g., [4, 9, -2, 12] for 4%, 9%, -2%, 12%)
 * @returns Final value after applying all yearly returns (rounded to nearest integer)
 *
 * @example
 * // Investment with returns of 4%, 9%, -2%, and 12% over 4 years
 * compoundWithVariableReturns(1000, [4, 9, -2, 12]);
 * // => 1229
 */
export function compoundWithVariableReturns(
  principal: number,
  yearlyReturns: number[],
): number {
  if (yearlyReturns.length === 0) {
    return round(principal);
  }

  let result = principal;
  for (const return_rate of yearlyReturns) {
    const r = return_rate / 100;
    result *= 1 + r;
  }

  return round(result);
}
