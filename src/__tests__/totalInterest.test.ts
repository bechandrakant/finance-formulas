import { calculateTotalInterest } from "../calculators/totalInterest";

describe("calculateTotalInterest", () => {
  test("calculates total interest correctly", () => {
    // Principal: 500000, EMI: 4339, Years: 20
    const totalInt = calculateTotalInterest(500000, 4339, 20);
    expect(totalInt).toBeCloseTo(541360, 0);
  });

  test("calculates total interest with different values", () => {
    // Principal: 1000000, EMI: 10746, Years: 15
    const totalInt = calculateTotalInterest(1000000, 10746, 15);
    expect(totalInt).toBeCloseTo(934280, 0);
  });

  test("handles short term loan", () => {
    // Principal: 100000, EMI: 8885, Years: 1
    const totalInt = calculateTotalInterest(100000, 8885, 1);
    expect(totalInt).toBeCloseTo(6620, 0);
  });

  test("calculates zero interest for zero EMI", () => {
    const totalInt = calculateTotalInterest(500000, 0, 20);
    expect(totalInt).toBe(-500000);
  });

  test("calculates interest when EMI equals principal divided by months", () => {
    // If EMI exactly matches principal divided by total months, interest should be 0
    const principal = 100000;
    const months = 12; // 1 year
    const emi = principal / months; // 8333.33
    const totalInt = calculateTotalInterest(principal, emi, 1);
    expect(totalInt).toBeCloseTo(0, 0);
  });

  test("returns correct type", () => {
    const totalInt = calculateTotalInterest(500000, 4339, 20);
    expect(typeof totalInt).toBe("number");
  });

  test("handles larger loan amounts", () => {
    // Principal: 5000000, EMI: 50000, Years: 10
    const totalInt = calculateTotalInterest(5000000, 50000, 10);
    expect(totalInt).toBe(1000000);
  });
});
