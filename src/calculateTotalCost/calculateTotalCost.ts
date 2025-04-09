export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  if (typeof paintCost !== "number" || typeof laborCost !== "number") return NaN;
  if (isNaN(paintCost) || isNaN(laborCost)) return NaN;
  return paintCost + laborCost;
}
