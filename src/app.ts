export function render(items: number[]): string {
  const subtotal = items.reduce((a, b) => a + b, 0);
  return `subtotal=${subtotal}`;
}
