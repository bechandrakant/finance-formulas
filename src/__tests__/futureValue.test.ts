import { lumpsumFutureValue } from "../calculators/futureValue";

describe("lumpsumFutureValue", () => {
  test("calculates future value correctly", () => {
    // Principal: 1000, Annual rate: 5%, Years: 10
    // Expected: 1629 (rounded)
    expect(lumpsumFutureValue(1000, 5, 10)).toBe(1629);
  });

  test("calculates future value with different values", () => {
    // 5000 at 7% for 5 years
    expect(lumpsumFutureValue(5000, 7, 5)).toBe(7013);
  });

  test("handles zero interest rate", () => {
    expect(lumpsumFutureValue(10000, 0, 5)).toBe(10000);
  });

  test("handles high interest rate", () => {
    expect(lumpsumFutureValue(1000, 10, 5)).toBe(1611);
  });

  test("handles fractional years", () => {
    expect(lumpsumFutureValue(1000, 5, 2.5)).toBe(1130);
  });

  test("handles zero principal", () => {
    expect(lumpsumFutureValue(0, 5, 10)).toBe(0);
  });
});
