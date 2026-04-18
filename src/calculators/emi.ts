// helper
const round = (num: number): number => Math.round(num);

/* ================================
   EMI CALCULATOR
   Loan amount, annual rate %, years
================================ */

export interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
}

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
