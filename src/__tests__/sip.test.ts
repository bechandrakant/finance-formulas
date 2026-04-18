import { calculateSIP, calculateSIPWithInflation } from "../calculators/sip";

describe("calculateSIP", () => {
  test("calculates SIP future value correctly", () => {
    // Monthly investment: 5000, Annual rate: 12%, Years: 10
    expect(calculateSIP(5000, 12, 10)).toBe(1161695);
  });

  test("calculates SIP with different values", () => {
    // Monthly investment: 10000, Annual rate: 10%, Years: 5
    expect(calculateSIP(10000, 10, 5)).toBe(780824);
  });

  test("handles zero investment", () => {
    expect(calculateSIP(0, 12, 10)).toBe(0);
  });

  test("handles fractional years", () => {
    expect(calculateSIP(5000, 12, 1.5)).toBe(99054);
  });
});

describe("calculateSIPWithInflation", () => {
  test("calculates SIP with inflation adjustment", () => {
    // Monthly investment: 5000, Annual rate: 12%, Inflation: 3%, Years: 10
    expect(calculateSIPWithInflation(5000, 12, 3, 10)).toBe(864410);
  });

  test("calculates SIP with different inflation rates", () => {
    // Same investment, higher inflation should give lower real value
    expect(calculateSIPWithInflation(5000, 12, 5, 10)).toBe(713180);
  });

  test("handles zero inflation", () => {
    // Zero inflation should give same result as regular SIP
    expect(calculateSIPWithInflation(5000, 12, 0, 10)).toBe(1161695);
  });

  test("handles high inflation", () => {
    expect(calculateSIPWithInflation(5000, 12, 10, 10)).toBe(447884);
  });
});
