const cUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity (value: number, prevUnit: string, curUnit: string,) {
  const firstUnit = cUnits.findIndex((i) => i === prevUnit);
  const lastUnit = cUnits.findIndex((i) => i === curUnit);
  return Math.pow(10, lastUnit - firstUnit) * value;
}

console.log(convertCapacity(3000, 'l', 'kl'));