"use strict";
const cUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, prevUnit, curUnit) {
    const firstUnit = cUnits.findIndex((i) => i === prevUnit);
    const lastUnit = cUnits.findIndex((i) => i === curUnit);
    return Math.pow(10, lastUnit - firstUnit) * value;
}
console.log(convertCapacity(3000, 'l', 'kl'));
