import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });

  test('should handle decimal values correctly', () => {
    expect(calculatePaintCost(2.5, 4.8)).toBeCloseTo(12);
    expect(calculatePaintCost(1.1, 3.3)).toBeCloseTo(3.63);
  });

  test('should return NaN for non-numeric inputs', () => {
    expect(calculatePaintCost("ten" as any, 5)).toBeNaN();
    expect(calculatePaintCost(5, "five" as any)).toBeNaN();
  });

  test('should return NaN for null or undefined', () => {
    expect(calculatePaintCost(null as any, 5)).toBeNaN();
    expect(calculatePaintCost(undefined as any, 5)).toBeNaN();
  });
});
