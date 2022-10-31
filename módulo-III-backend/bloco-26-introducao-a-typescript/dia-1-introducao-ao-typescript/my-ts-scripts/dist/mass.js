"use strict";
const nUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertWeight(value, prevUnit, curUnit) {
    const firstUnit = nUnits.findIndex((i) => i === prevUnit);
    const lastUnit = nUnits.findIndex((i) => i === curUnit);
    return Math.pow(10, lastUnit - firstUnit) * value;
}
console.log(convertWeight(3000, 'g', 'kg'));
