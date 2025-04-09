export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  if (typeof area !== "number" || typeof paintingSpeed !== "number" || isNaN(area) || isNaN(paintingSpeed)) {
    return NaN;  // Handle invalid inputs (non-numeric, null, undefined)
  }
  
  if (paintingSpeed === 0) return Infinity;  // Handling division by zero (infinite time)

  return area / paintingSpeed;
}
