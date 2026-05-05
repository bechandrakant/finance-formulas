import { calculateSWP } from "../calculators/swp";

describe("calculateSWP", () => {
  test("calculates how many months corpus lasts with monthly withdrawals", () => {
    // Corpus: 1000000, Withdrawal: 15000/month, Annual return: 6%
    expect(calculateSWP(1000000, 15000, 6)).toBe(82);
  });

  test("handles zero annual return", () => {
    expect(calculateSWP(100000, 10000, 0)).toBe(10);
  });

  test("handles withdrawal greater than corpus", () => {
    expect(calculateSWP(50000, 60000, 12)).toBe(1);
  });

  test("caps long-running corpus scenarios at 1000 months", () => {
    expect(calculateSWP(1000000, 10000, 12)).toBe(1000);
  });
});
