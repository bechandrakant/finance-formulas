// helper
const round = (num: number): number => Math.round(num);

/* ================================
   CAGR CALCULATOR
   Beginning value, Ending value, years
================================ */

export function calculateCAGR(
  beginValue: number,
  endValue: number,
  years: number
): number {
  const cagr = Math.pow(endValue / beginValue, 1 / years) - 1;

  return round(cagr * 100); // percentage
}