export default function convertAreaToSquareFeet(area: number): number {
  if (!Number.isFinite(area)) return NaN;  // Check for null, undefined, or non-numeric inputs

  const conversionFactor = 10.7639;
  const result = area * conversionFactor;

  // Round to 4 decimal places to handle floating-point precision issues
  return Math.round(result * 10000) / 10000;
}
