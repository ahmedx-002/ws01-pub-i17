export function render(items: number[]): string {
  const total = items.reduce((a, b) => a + b, 0);
  return `total=${total}`;
}
