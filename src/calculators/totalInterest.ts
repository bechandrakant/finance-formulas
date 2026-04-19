/**
 * Calculate total interest paid on a loan.
 *
 * Calculates the total interest amount paid over the loan tenure given the
 * EMI amount, principal, and loan duration. Useful for understanding the
 * true cost of borrowing.
 *
 * @param principal Principal loan amount (in currency units)
 * @param emi Monthly EMI amount (in currency units)
 * @param years Loan tenure in years
 * @returns Total interest paid over the loan tenure
 *
 * @example
 * // Calculate total interest on 500000 loan with 4339 EMI for 20 years
 * calculateTotalInterest(500000, 4339, 20);
 * // => 541388
 *
 * @example
 * // Can be used alongside calculateEMI
 * const emiResult = calculateEMI(500000, 8.5, 20);
 * const totalInt = calculateTotalInterest(500000, emiResult.emi, 20);
 * // => 541388
 */
export function calculateTotalInterest(
  principal: number,
  emi: number,
  years: number,
): number {
  const totalPaid = emi * years * 12;
  return totalPaid - principal;
}
