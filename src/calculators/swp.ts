/**
 * Calculate how long a Systematic Withdrawal Plan (SWP) corpus will last.
 *
 * Simulates monthly withdrawals from a corpus while the remaining balance
 * continues to earn monthly compounded returns.
 *
 * @param corpus Initial retirement or investment corpus
 * @param withdrawalPerMonth Amount withdrawn every month
 * @param annualReturn Expected annual return rate (in %)
 * @returns Number of months the corpus will last, capped at 1000 months
 *
 * @example
 * // Withdraw 15000/month from 1000000 at 6% annual return
 * calculateSWP(1000000, 15000, 6);
 * // => 82
 */
export function calculateSWP(
  corpus: number,
  withdrawalPerMonth: number,
  annualReturn: number,
): number {
  const r = annualReturn / 12 / 100;
  let months = 0;

  while (corpus > 0 && months < 1000) {
    corpus = corpus * (1 + r) - withdrawalPerMonth;
    months++;
  }

  return months;
}
