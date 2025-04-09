import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should return Infinity for painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(estimatePaintingTime(-100, 10)).toBe(-10);
    expect(estimatePaintingTime(100, -10)).toBe(-10);
    expect(estimatePaintingTime(-100, -10)).toBe(10);
  });

  test('should handle decimal values correctly', () => {
    expect(estimatePaintingTime(100.5, 10)).toBeCloseTo(10.05, 2);
    expect(estimatePaintingTime(200.5, 25)).toBeCloseTo(8.02, 2);
  });

  test('should return NaN for non-numeric values', () => {
    expect(estimatePaintingTime("abc" as any, 10)).toBeNaN();
    expect(estimatePaintingTime(100, "xyz" as any)).toBeNaN();
  });

  test('should return NaN for null, undefined, or empty string', () => {
    expect(estimatePaintingTime(null as any, 10)).toBeNaN();
    expect(estimatePaintingTime(undefined as any, 10)).toBeNaN();
    expect(estimatePaintingTime("" as any, 10)).toBeNaN();
  });
});
