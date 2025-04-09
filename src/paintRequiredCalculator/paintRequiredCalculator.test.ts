import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result for standard inputs", () => {
    const result = paintRequiredCalculator(50, 10, 1);  // 50 / 10 * 1 = 5
    expect(result).toEqual(5);
  });

  test("should return 0 when area is 0", () => {
    const result = paintRequiredCalculator(0, 10, 2);
    expect(result).toEqual(0);
  });

  test("should return 0 when coverage per liter is 0", () => {
    const result = paintRequiredCalculator(50, 0, 2);
    expect(result).toEqual(0);
  });

  test("should return 0 when coats are 0", () => {
    const result = paintRequiredCalculator(50, 10, 0);
    expect(result).toEqual(0);
  });

  test("should handle negative values correctly", () => {
    const result = paintRequiredCalculator(-50, 10, 2);  // Negative area
    expect(result).toEqual(-10);

    const result2 = paintRequiredCalculator(50, -10, 2);  // Negative coverage per liter
    expect(result2).toEqual(-10);

    const result3 = paintRequiredCalculator(50, 10, -2);  // Negative coats
    expect(result3).toEqual(-10);
  });

  test("should return NaN for non-numeric values", () => {
    const result = paintRequiredCalculator("abc" as any, 10, 2);
    expect(result).toBeNaN();

    const result2 = paintRequiredCalculator(50, "xyz" as any, 2);
    expect(result2).toBeNaN();

    const result3 = paintRequiredCalculator(50, 10, "one" as any);
    expect(result3).toBeNaN();
  });

  test("should return NaN for null, undefined, or empty string", () => {
    const result = paintRequiredCalculator(null as any, 10, 2);
    expect(result).toBeNaN();

    const result2 = paintRequiredCalculator(undefined as any, 10, 2);
    expect(result2).toBeNaN();

    const result3 = paintRequiredCalculator("" as any, 10, 2);
    expect(result3).toBeNaN();
  });
});
