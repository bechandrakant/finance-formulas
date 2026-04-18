// helper
const round = (num: number): number => Math.round(num);

/* ================================
   FD CALCULATOR (Compound Interest)
   Principal, annual rate %, years
================================ */

export interface FDResult {
  maturityAmount: number;
  interestEarned: number;
}

export function calculateFD(
  principal: number,
  annualRate: number,
  years: number
): FDResult {
  const r = annualRate / 100;
  const maturityAmount = principal * Math.pow(1 + r, years);
  const interestEarned = maturityAmount - principal;

  return {
    maturityAmount: round(maturityAmount),
    interestEarned: round(interestEarned),
  };
}