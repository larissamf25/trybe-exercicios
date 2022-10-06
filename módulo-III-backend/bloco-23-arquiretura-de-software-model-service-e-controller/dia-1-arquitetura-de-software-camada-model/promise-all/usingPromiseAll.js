// usingPromiseAll.js

const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

async function main() {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`)
    }) 
    await Promise.all(promises);
    // não garante que as promises do array sejam resolvidas em ordem, mas sim que todas sejam resolvidas para poder passar para a promise seguinte
    console.log(`That's all folks!`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

async function getFilesSizeSum() {
  try {
    let filesSizeSum = 0
    await Promise.all(files.map(async (file) => {
      contentFile = await fs.readFile(file);
      filesSizeSum = filesSizeSum + contentFile.byteLength;
    }));
    result = `Lidos 3 arquivos totalizando ${filesSizeSum} bytes`;
    return console.log(result);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

getFilesSizeSum();

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

main()