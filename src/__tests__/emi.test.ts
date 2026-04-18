import { calculateEMI } from "../calculators/emi";

describe("calculateEMI", () => {
  test("calculates EMI correctly", () => {
    // Loan amount: 500000, Annual rate: 8.5%, Years: 20
    const result = calculateEMI(500000, 8.5, 20);
    expect(result.emi).toBe(4339);
    expect(result.totalPayment).toBe(1041388);
    expect(result.totalInterest).toBe(541388);
  });

  test("calculates EMI with different values", () => {
    const result = calculateEMI(1000000, 10, 15);
    expect(result.emi).toBe(10746);
    expect(result.totalPayment).toBe(1934289);
    expect(result.totalInterest).toBe(934289);
  });

  test("handles short term loan", () => {
    const result = calculateEMI(100000, 12, 1);
    expect(result.emi).toBe(8885);
    expect(result.totalPayment).toBe(106619);
    expect(result.totalInterest).toBe(6619);
  });

  test("returns correct types", () => {
    const result = calculateEMI(500000, 8.5, 20);
    expect(typeof result.emi).toBe("number");
    expect(typeof result.totalPayment).toBe("number");
    expect(typeof result.totalInterest).toBe("number");
  });
});
