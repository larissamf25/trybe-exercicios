import readline from "readline-sync";

const options = ['area', 'capacity', 'character', 'length', 'mass', 'volume'];

function exec () {
  const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];
  const optionIndex = readline.keyInSelect(options, "Escolha o tipo de conversão:");
  const option = options[optionIndex];
  require(scripts[option].script);
};

exec();