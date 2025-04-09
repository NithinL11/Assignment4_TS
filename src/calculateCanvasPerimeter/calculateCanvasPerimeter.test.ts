import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("should calculate perimeter correctly for positive values", () => {
    expect(calculateCanvasPerimeter("10", "20")).toBe(60);
    expect(calculateCanvasPerimeter("5", "15")).toBe(40);
  });

  test("should return 0 if both length and width are 0", () => {
    expect(calculateCanvasPerimeter("0", "0")).toBe(0);
  });

  test("should return 0 for negative values", () => {
    expect(calculateCanvasPerimeter("-10", "20")).toBe(0);
    expect(calculateCanvasPerimeter("10", "-20")).toBe(0);
    expect(calculateCanvasPerimeter("-10", "-20")).toBe(0);
  });

  test("should return NaN for non-numeric values", () => {
    expect(calculateCanvasPerimeter("a", "20")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "b")).toBeNaN();
    expect(calculateCanvasPerimeter("a", "b")).toBeNaN();
  });

  test("should handle decimal values correctly", () => {
    expect(calculateCanvasPerimeter("2.5", "4.5")).toBeCloseTo(14);
  });

  test("should return NaN for null, undefined, or empty strings", () => {
    expect(calculateCanvasPerimeter(null as any, "5")).toBeNaN();
    expect(calculateCanvasPerimeter(undefined as any, "5")).toBeNaN();
    expect(calculateCanvasPerimeter("", "5")).toBeNaN();
  });
});
