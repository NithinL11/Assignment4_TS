import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should handle negative values correctly', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
    expect(calculateTotalCost(100, -50)).toBe(50);
    expect(calculateTotalCost(-100, -50)).toBe(-150);
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  test('should handle decimal values correctly', () => {
    expect(calculateTotalCost(25.5, 74.5)).toBeCloseTo(100);
    expect(calculateTotalCost(99.99, 0.01)).toBeCloseTo(100);
  });

  test('should return NaN for non-numeric inputs', () => {
    expect(calculateTotalCost("abc" as any, 100)).toBeNaN();
    expect(calculateTotalCost(100, "xyz" as any)).toBeNaN();
  });

  test('should return NaN for null, undefined, or empty input', () => {
    expect(calculateTotalCost(null as any, 100)).toBeNaN();
    expect(calculateTotalCost(undefined as any, 100)).toBeNaN();
    expect(calculateTotalCost("" as any, 100)).toBeNaN();
  });
});
