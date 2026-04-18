// helper
const round = (num: number): number => Math.round(num);

/**
 * Calculate SIP (Systematic Investment Plan) maturity amount.
 *
 * Calculates the future value of a series of monthly investments at a given
 * annual return rate.
 *
 * @param monthlyInvestment Amount invested every month
 * @param annualRate Expected annual return rate (in %)
 * @param years Investment duration in years
 * @returns Final maturity value (rounded to nearest integer)
 *
 * @example
 * // Invest 5000/month at 12% annual return for 10 years
 * calculateSIP(5000, 12, 10);
 * // => 1161695
 */
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

/**
 * Calculate inflation-adjusted SIP maturity amount.
 *
 * Calculates the real (inflation-adjusted) future value of a series of
 * monthly investments, accounting for inflation.
 *
 * @param monthlyInvestment Amount invested every month
 * @param annualRate Expected annual return rate (in %)
 * @param inflationRate Expected annual inflation rate (in %)
 * @param years Investment duration in years
 * @returns Inflation-adjusted maturity value (rounded to nearest integer)
 *
 * @example
 * // Invest 5000/month at 12% with 3% inflation for 10 years
 * calculateSIPWithInflation(5000, 12, 3, 10);
 * // => 864410
 */
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
