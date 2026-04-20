import { timeToDouble } from "../calculators/timeToDouble";

describe("timeToDouble", () => {
  test("calculates time to double at 7% rate", () => {
    const years = timeToDouble(7);
    expect(years).toBeCloseTo(10.2857, 4);
  });

  test("calculates time to double at 8% rate", () => {
    const years = timeToDouble(8);
    expect(years).toBe(9);
  });

  test("calculates time to double at 6% rate", () => {
    const years = timeToDouble(6);
    expect(years).toBeCloseTo(12, 0);
  });

  test("calculates time to double at 10% rate", () => {
    const years = timeToDouble(10);
    expect(years).toBe(7.2);
  });

  test("calculates time to double at 12% rate", () => {
    const years = timeToDouble(12);
    expect(years).toBe(6);
  });

  test("calculates time to double at 4% rate", () => {
    const years = timeToDouble(4);
    expect(years).toBe(18);
  });

  test("calculates time to double at 3% rate", () => {
    const years = timeToDouble(3);
    expect(years).toBeCloseTo(24, 0);
  });

  test("calculates time to double at 1% rate", () => {
    const years = timeToDouble(1);
    expect(years).toBe(72);
  });

  test("calculates time to double at 0.5% rate", () => {
    const years = timeToDouble(0.5);
    expect(years).toBe(144);
  });

  test("returns correct type", () => {
    const years = timeToDouble(7);
    expect(typeof years).toBe("number");
  });

  test("handles decimal rates", () => {
    const years = timeToDouble(7.5);
    expect(years).toBeCloseTo(9.6, 1);
  });
});
