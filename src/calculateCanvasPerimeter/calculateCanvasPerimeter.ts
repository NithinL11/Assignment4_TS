export default function calculateCanvasPerimeter(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) return NaN;
  if (l < 0 || w < 0) return 0;

  return 2 * (l + w);
}
