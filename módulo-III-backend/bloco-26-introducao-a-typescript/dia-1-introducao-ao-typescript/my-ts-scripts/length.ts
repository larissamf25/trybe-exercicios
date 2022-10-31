const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert (value: number, prevUnit: string, curUnit: string,) {
  const firstUnit = units.findIndex((i) => i === prevUnit);
  const lastUnit = units.findIndex((i) => i === curUnit);
  return Math.pow(10, lastUnit - firstUnit) * value;
}

console.log(convert(3000, 'm', 'km'));