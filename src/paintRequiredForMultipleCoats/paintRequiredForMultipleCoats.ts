export default function paintRequiredForMultipleCoats(area: number, coveragePerLiter: number, coats: number): number {
  // If area, coveragePerLiter, or coats is 0, handle them as follows:
  if (area === 0 || coveragePerLiter === 0 || coats === 0) {
    return coveragePerLiter === 0 ? Infinity : 0;
  }

  // Check for invalid inputs (non-numeric values)
  if (!Number.isFinite(area) || !Number.isFinite(coveragePerLiter) || !Number.isFinite(coats)) {
    return NaN;
  }

  // Calculate the paint required
  return (area / coveragePerLiter) * coats;
}
