import { presentValue } from "../calculators/presentValue";

describe("presentValue", () => {
  test("calculates present value correctly", () => {
    // Future value: 1629, Annual rate: 5%, Years: 10
    // Expected: 1000 (rounded)
    expect(presentValue(1629, 5, 10)).toBe(1000);
  });

  test("calculates present value with different values", () => {
    // 7013 at 7% for 5 years should be approximately 5000
    expect(presentValue(7013, 7, 5)).toBe(5000);
  });

  test("handles zero interest rate", () => {
    expect(presentValue(10000, 0, 5)).toBe(10000);
  });

  test("handles high interest rate", () => {
    expect(presentValue(1611, 10, 5)).toBe(1000);
  });

  test("handles fractional years", () => {
    expect(presentValue(1130, 5, 2.5)).toBe(1000);
  });

  test("handles zero future value", () => {
    expect(presentValue(0, 5, 10)).toBe(0);
  });

  test("handles single year", () => {
    expect(presentValue(1050, 5, 1)).toBe(1000);
  });
});