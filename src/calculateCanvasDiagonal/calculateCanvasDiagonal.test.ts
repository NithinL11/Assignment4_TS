import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal('3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('6', '8')).toBeCloseTo(10);
    expect(calculateCanvasDiagonal('5', '12')).toBeCloseTo(13);
  });

  test('should return 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('3', '-4')).toBeCloseTo(5);
    expect(calculateCanvasDiagonal('-3', '-4')).toBeCloseTo(5);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN();
    expect(calculateCanvasDiagonal('3', 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });

  test('should calculate diagonal correctly for decimal values', () => {
    expect(calculateCanvasDiagonal('3.5', '4.5')).toBeCloseTo(5.70088, 4);
  });

  test('should handle large numbers without overflow', () => {
    expect(calculateCanvasDiagonal('1000000', '1000000')).toBeCloseTo(1414213.56, 2);
  });

  test('should return NaN for null, undefined, or empty string inputs', () => {
    expect(calculateCanvasDiagonal(null as any, '4')).toBeNaN();
    expect(calculateCanvasDiagonal(undefined as any, '4')).toBeNaN();
    expect(calculateCanvasDiagonal('', '4')).toBeNaN();
  });
});
