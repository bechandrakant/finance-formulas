// helper
const round = (num: number): number => Math.round(num);

/* ================================
   SIP CALCULATOR
   Monthly investment, annual return %, years
   Formula: Future Value of SIP
================================ */

export function calculateSIP(
  monthlyInvestment: number,
  annualRate: number,
  years: number,
): number {
  const r = annualRate / 100 / 12; // monthly rate
  const n = years * 12; // months

  const futureValue =
    monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  return round(futureValue);
}

/* ================================
   SIP CALCULATOR WITH INFLATION ADJUSTMENT
   Monthly investment, annual return %, inflation %, years
   Formula: Real Future Value of SIP (adjusted for inflation)
================================ */

export function calculateSIPWithInflation(
  monthlyInvestment: number,
  annualRate: number,
  inflationRate: number,
  years: number,
): number {
  const nominalFutureValue = calculateSIP(monthlyInvestment, annualRate, years);
  const inflationFactor = Math.pow(1 + inflationRate / 100, years);
  const realFutureValue = nominalFutureValue / inflationFactor;

  return round(realFutureValue);
}
