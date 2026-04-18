import { calculateCAGR } from "../calculators/cagr";

describe("calculateCAGR", () => {
  test("calculates CAGR correctly", () => {
    // Beginning value: 10000, Ending value: 20000, Years: 3
    // Expected: 26% (from README example)
    expect(calculateCAGR(10000, 20000, 3)).toBe(26);
  });

  test("calculates CAGR with different values", () => {
    // 5000 to 10000 in 4 years
    expect(calculateCAGR(5000, 10000, 4)).toBe(19);
  });

  test("handles no growth", () => {
    expect(calculateCAGR(10000, 10000, 5)).toBe(0);
  });

  test("handles loss", () => {
    expect(calculateCAGR(10000, 5000, 2)).toBe(-29);
  });

  test("handles high growth", () => {
    expect(calculateCAGR(1000, 10000, 3)).toBe(115);
  });

  test("handles fractional years", () => {
    expect(calculateCAGR(10000, 15000, 2.5)).toBe(18);
  });

  test("returns percentage as number", () => {
    const result = calculateCAGR(10000, 20000, 3);
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(-100);
    expect(result).toBeLessThanOrEqual(1000); // reasonable upper bound
  });
});
