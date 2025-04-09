export default function paintRequiredCalculator(area: number, coveragePerLiter: number, coats: number): number {
  // If any parameter is zero, return 0
  if (area === 0 || coveragePerLiter === 0 || coats === 0) {
    return 0;
  }

  // Check for invalid inputs
  if (!Number.isFinite(area) || !Number.isFinite(coveragePerLiter) || !Number.isFinite(coats)) {
    return NaN;
  }

  // Calculate the paint required
  return (area / coveragePerLiter) * coats;
}
