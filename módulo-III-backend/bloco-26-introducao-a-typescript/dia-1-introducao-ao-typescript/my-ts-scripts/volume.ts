import readline from "readline-sync";

const vUnits = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

function convertVolume (value: number, prevUnit: string, curUnit: string,) {
  const firstUnit = vUnits.findIndex((i) => i === prevUnit);
  const lastUnit = vUnits.findIndex((i) => i === curUnit);
  return Math.round(Math.pow(10, 3 * (lastUnit - firstUnit)) * value);
}

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnitChoiceIndex = readline.keyInSelect(vUnits, "Escolha um número para a unidade base:");
  const toUnitChoiceIndex = readline.keyInSelect(vUnits, "Escolha um número para a conversão:");


  const fromUnitChoice = vUnits[fromUnitChoiceIndex];
  const toUnitChoice = vUnits[toUnitChoiceIndex];

  const result = convertVolume(value, fromUnitChoice, toUnitChoice)

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  console.log(message);
}

exec();