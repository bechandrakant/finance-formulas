import { calculateRealReturn } from "../calculators/realReturn";

describe("calculateRealReturn", () => {
  test("calculates real return correctly for positive inflation", () => {
    expect(calculateRealReturn(10, 5)).toBeCloseTo(4.7619047619, 10);
  });

  test("calculates real return correctly when inflation is zero", () => {
    expect(calculateRealReturn(8, 0)).toBeCloseTo(8, 10);
  });

  test("calculates negative real returns when inflation exceeds nominal return", () => {
    expect(calculateRealReturn(4, 6)).toBeCloseTo(-1.8867924528, 10);
  });

  test("returns 0 when nominal return and inflation are equal", () => {
    expect(calculateRealReturn(5, 5)).toBeCloseTo(0, 10);
  });
});
