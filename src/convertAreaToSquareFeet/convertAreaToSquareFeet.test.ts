import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39, 2);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78, 2);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585, 2);
  });

  test('should return 0 for area of 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(convertAreaToSquareFeet(-100)).toBeCloseTo(-1076.39, 2);
    expect(convertAreaToSquareFeet(-200)).toBeCloseTo(-2152.78, 2);
    expect(convertAreaToSquareFeet(-150)).toBeCloseTo(-1614.585, 2);
  });

  test('should return NaN for non-numeric values', () => {
    expect(convertAreaToSquareFeet("abc" as any)).toBeNaN();
  });

  test('should return NaN for null, undefined, or empty string', () => {
    expect(convertAreaToSquareFeet(null as any)).toBeNaN();
    expect(convertAreaToSquareFeet(undefined as any)).toBeNaN();
    expect(convertAreaToSquareFeet("" as any)).toBeNaN();
  });
});
