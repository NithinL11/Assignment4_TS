import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });

  test('should return Infinity for coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats(100, 0, 2)).toBe(Infinity);
  });

  test('should handle negative values correctly', () => {
    expect(paintRequiredForMultipleCoats(-100, 10, 2)).toBe(-20);  // Negative area
    expect(paintRequiredForMultipleCoats(100, -10, 2)).toBe(-20);  // Negative coverage per liter
    expect(paintRequiredForMultipleCoats(100, 10, -2)).toBe(-20);  // Negative coats
  });

  test('should handle coats of 0 correctly', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 0)).toBe(0);
  });

  test('should return NaN for non-numeric values', () => {
    expect(paintRequiredForMultipleCoats("abc" as any, 10, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(100, "xyz" as any, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(100, 10, "one" as any)).toBeNaN();
  });

  test('should return NaN for null, undefined, or empty string', () => {
    expect(paintRequiredForMultipleCoats(null as any, 10, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats(undefined as any, 10, 2)).toBeNaN();
    expect(paintRequiredForMultipleCoats("" as any, 10, 2)).toBeNaN();
  });
});
