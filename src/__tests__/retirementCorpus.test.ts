import { retirementCorpus } from "../calculators/retirementCorpus";

describe("retirementCorpus", () => {
  test("calculates retirement corpus with standard inputs", () => {
    // Monthly expense: 50000, Inflation: 3%, Years to retirement: 20,
    // Years after retirement: 30, Return rate: 7%
    const result = retirementCorpus(50000, 3, 20, 30, 7);
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThan(0);
    expect(result).toBe(13447265);
  });

  test("calculates with lower monthly expense", () => {
    // 30000 monthly expense
    const result = retirementCorpus(30000, 3, 20, 30, 7);
    expect(result).toBe(8068359);
  });

  test("calculates with higher inflation rate", () => {
    // Same as first test but with 5% inflation
    const result = retirementCorpus(50000, 5, 20, 30, 7);
    expect(result).toBeGreaterThan(retirementCorpus(50000, 3, 20, 30, 7));
  });

  test("calculates with lower return rate", () => {
    // Same as first test but with 5% returns
    const result = retirementCorpus(50000, 3, 20, 30, 5);
    expect(result).toBeGreaterThan(retirementCorpus(50000, 3, 20, 30, 7));
  });

  test("calculates with shorter retirement period", () => {
    // 20 years after retirement instead of 30
    const result = retirementCorpus(50000, 3, 20, 20, 7);
    expect(result).toBeLessThan(retirementCorpus(50000, 3, 20, 30, 7));
  });

  test("calculates with longer pre-retirement period", () => {
    // 30 years to retirement instead of 20
    const result = retirementCorpus(50000, 3, 30, 30, 7);
    expect(result).toBeGreaterThan(retirementCorpus(50000, 3, 20, 30, 7));
  });

  test("handles zero inflation", () => {
    const result = retirementCorpus(50000, 0, 20, 30, 7);
    expect(result).toBeGreaterThan(0);
  });

  test("returns a positive number", () => {
    const result = retirementCorpus(100000, 4, 25, 25, 8);
    expect(result).toBeGreaterThan(0);
  });

  test("increases with higher monthly expense", () => {
    const lower = retirementCorpus(30000, 3, 20, 30, 7);
    const higher = retirementCorpus(60000, 3, 20, 30, 7);
    expect(higher).toBeGreaterThan(lower);
    // Should be approximately double for double the expense
    expect(higher).toBeLessThan(lower * 2.2);
    expect(higher).toBeGreaterThan(lower * 1.8);
  });

  test("corpus increases with higher inflation over time", () => {
    const baseCase = retirementCorpus(50000, 3, 20, 30, 7);
    const higherInflation = retirementCorpus(50000, 5, 20, 30, 7);
    expect(higherInflation).toBeGreaterThan(baseCase);
  });

  test("corpus increases with longer retirement period", () => {
    const result20 = retirementCorpus(50000, 3, 20, 20, 7);
    const result30 = retirementCorpus(50000, 3, 20, 30, 7);
    expect(result30).toBeGreaterThan(result20);
  });
});
