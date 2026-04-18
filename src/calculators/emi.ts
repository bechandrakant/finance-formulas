// helper
const round = (num: number): number => Math.round(num);

/**
 * Result object for EMI calculation.
 * @interface EMIResult
 * @property emi Monthly EMI amount
 * @property totalPayment Total amount to be paid over the loan tenure
 * @property totalInterest Total interest to be paid
 */
export interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
}

/**
 * Calculate Equated Monthly Installment (EMI) for a loan.
 *
 * Calculates the fixed monthly payment amount for a loan along with total
 * interest and total payment over the loan tenure.
 *
 * @param loanAmount Principal loan amount (in currency units)
 * @param annualRate Annual interest rate (in %)
 * @param years Loan tenure in years
 * @returns EMIResult object containing emi, totalPayment, and totalInterest
 *
 * @example
 * // Calculate EMI for 500000 loan at 8.5% for 20 years
 * calculateEMI(500000, 8.5, 20);
 * // => { emi: 4339, totalPayment: 1041388, totalInterest: 541388 }
 */
export function calculateEMI(
  loanAmount: number,
  annualRate: number,
  years: number,
): EMIResult {
  const r = annualRate / 100 / 12; // monthly rate
  const n = years * 12;

  const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  const totalPayment = emi * n;
  const totalInterest = totalPayment - loanAmount;

  return {
    emi: round(emi),
    totalPayment: round(totalPayment),
    totalInterest: round(totalInterest),
  };
}
