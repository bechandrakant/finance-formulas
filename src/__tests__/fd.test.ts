import { calculateFD } from "../calculators/fd";

describe("calculateFD", () => {
  test("calculates FD maturity correctly", () => {
    // Principal: 100000, Annual rate: 7%, Years: 5
    const result = calculateFD(100000, 7, 5);
    expect(result.maturityAmount).toBe(140255);
    expect(result.interestEarned).toBe(40255);
  });

  test("calculates FD with different values", () => {
    const result = calculateFD(50000, 6, 3);
    expect(result.maturityAmount).toBe(59551);
    expect(result.interestEarned).toBe(9551);
  });

  test("handles zero interest rate", () => {
    const result = calculateFD(100000, 0, 5);
    expect(result.maturityAmount).toBe(100000);
    expect(result.interestEarned).toBe(0);
  });

  test("handles high interest rate", () => {
    const result = calculateFD(100000, 10, 5);
    expect(result.maturityAmount).toBe(161051);
    expect(result.interestEarned).toBe(61051);
  });

  test("handles fractional years", () => {
    const result = calculateFD(100000, 7, 2.5);
    expect(result.maturityAmount).toBe(118429);
    expect(result.interestEarned).toBe(18429);
  });

  test("returns correct types", () => {
    const result = calculateFD(100000, 7, 5);
    expect(typeof result.maturityAmount).toBe("number");
    expect(typeof result.interestEarned).toBe("number");
  });
});
