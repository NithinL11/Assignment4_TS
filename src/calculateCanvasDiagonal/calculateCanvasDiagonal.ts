export default function calculateCanvasDiagonal(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) return NaN;

  // Pythagoras' theorem
  return Math.sqrt(Math.pow(l, 2) + Math.pow(w, 2));
}
