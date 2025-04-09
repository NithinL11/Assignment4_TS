export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  if (paintRequired == null || costPerLiter == null) return NaN;
  return paintRequired * costPerLiter;
}
