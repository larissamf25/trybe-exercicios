const aUnits = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

function convertArea (value: number, prevUnit: string, curUnit: string,) {
  const firstUnit = aUnits.findIndex((i) => i === prevUnit);
  const lastUnit = aUnits.findIndex((i) => i === curUnit);
  return Math.round(Math.pow(10, 2 * (lastUnit - firstUnit)) * value);
}

console.log(convertArea(40000, 'cm2', 'm2'));