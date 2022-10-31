"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const vUnits = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
function convertVolume(value, prevUnit, curUnit) {
    const firstUnit = vUnits.findIndex((i) => i === prevUnit);
    const lastUnit = vUnits.findIndex((i) => i === curUnit);
    return Math.round(Math.pow(10, 3 * (lastUnit - firstUnit)) * value);
}
function exec() {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(vUnits, "Escolha um número para a unidade base:");
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(vUnits, "Escolha um número para a conversão:");
    const fromUnitChoice = vUnits[fromUnitChoiceIndex];
    const toUnitChoice = vUnits[toUnitChoiceIndex];
    const result = convertVolume(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();
