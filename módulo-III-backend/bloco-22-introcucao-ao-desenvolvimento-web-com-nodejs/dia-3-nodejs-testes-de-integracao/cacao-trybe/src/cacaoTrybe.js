const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesByName = async (name) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));
}

const writeCacaoTrybe = async function(content) {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salvar o arquivo', error.message);
    return null;
  }
}

const updateChocolateById = async (id, name, brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const index = cacaoTrybe.chocolates.findIndex((chocolate) => chocolate.id === id);
  if(index) {
    cacaoTrybe.chocolates.map((chocolate) => {
      if(chocolate.id === id) return { id, name, brandId }
      return chocolate;
    });
    await writeCacaoTrybe(cacaoTrybe);
    return { ...cacaoTrybe.chocolate[index], name, brandId }
  }
  return false;
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getChocolatesByName,
    updateChocolateById,
};