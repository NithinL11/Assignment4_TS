import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("should calculate area correctly for positive integers", () => {
    expect(calculateCanvasSize("10", "20")).toBe(200);
    expect(calculateCanvasSize("5", "15")).toBe(75);
  });

  test("should return 0 if either value is 0", () => {
    expect(calculateCanvasSize("0", "100")).toBe(0);
    expect(calculateCanvasSize("10", "0")).toBe(0);
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });

  test("should handle negative values by multiplying them", () => {
    expect(calculateCanvasSize("-10", "5")).toBe(-50);
    expect(calculateCanvasSize("10", "-5")).toBe(-50);
    expect(calculateCanvasSize("-10", "-5")).toBe(50);
  });

  test("should truncate decimal values due to parseInt", () => {
    expect(calculateCanvasSize("3.9", "2.1")).toBe(6); // 3 * 2
    expect(calculateCanvasSize("7.5", "1.9")).toBe(7); // 7 * 1 = 7
  });

  test("should return NaN if either input is not a number", () => {
    expect(calculateCanvasSize("a", "10")).toBeNaN();
    expect(calculateCanvasSize("10", "b")).toBeNaN();
    expect(calculateCanvasSize("a", "b")).toBeNaN();
  });

  test("should return NaN for null, undefined, or empty string", () => {
    expect(calculateCanvasSize(null as any, "5")).toBeNaN();
    expect(calculateCanvasSize(undefined as any, "5")).toBeNaN();
    expect(calculateCanvasSize("", "5")).toBeNaN();
  });
});
