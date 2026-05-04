import { compoundWithVariableReturns } from "../calculators/variableReturn";

describe("compoundWithVariableReturns", () => {
  test("calculates compound value with variable returns correctly", () => {
    // Principal: 1000, Returns: 4%, 9%, -2%, 12%
    // Year 1: 1000 * 1.04 = 1040
    // Year 2: 1040 * 1.09 = 1133.6
    // Year 3: 1133.6 * 0.98 = 1110.928
    // Year 4: 1110.928 * 1.12 = 1244.239
    // Expected: 1244 (rounded)
    expect(compoundWithVariableReturns(1000, [4, 9, -2, 12])).toBe(1244);
  });

  test("calculates with all positive returns", () => {
    // 1000 with 5%, 6%, 7%
    expect(compoundWithVariableReturns(1000, [5, 6, 7])).toBe(1191);
  });

  test("handles negative returns", () => {
    // 1000 with -10%, -5%, 10%
    // Year 1: 1000 * 0.90 = 900
    // Year 2: 900 * 0.95 = 855
    // Year 3: 855 * 1.10 = 940.5
    // Expected: 941 (rounded)
    expect(compoundWithVariableReturns(1000, [-10, -5, 10])).toBe(941);
  });

  test("handles single year return", () => {
    expect(compoundWithVariableReturns(1000, [10])).toBe(1100);
  });

  test("handles zero return", () => {
    expect(compoundWithVariableReturns(1000, [0, 0, 0])).toBe(1000);
  });

  test("handles empty returns array", () => {
    expect(compoundWithVariableReturns(1000, [])).toBe(1000);
  });

  test("handles large principal", () => {
    // 100000 with 5%, 8%, 3%
    // Year 1: 100000 * 1.05 = 105000
    // Year 2: 105000 * 1.08 = 113400
    // Year 3: 113400 * 1.03 = 116802
    expect(compoundWithVariableReturns(100000, [5, 8, 3])).toBe(116802);
  });

  test("handles mix of positive and negative returns", () => {
    // 5000 with 20%, -15%, 10%
    // Year 1: 5000 * 1.20 = 6000
    // Year 2: 6000 * 0.85 = 5100
    // Year 3: 5100 * 1.10 = 5610
    expect(compoundWithVariableReturns(5000, [20, -15, 10])).toBe(5610);
  });

  test("handles high volatility", () => {
    // -50%, 100% demonstrates recovery from major loss
    // 1000 * 0.50 = 500
    // 500 * 2.00 = 1000
    expect(compoundWithVariableReturns(1000, [-50, 100])).toBe(1000);
  });
});
