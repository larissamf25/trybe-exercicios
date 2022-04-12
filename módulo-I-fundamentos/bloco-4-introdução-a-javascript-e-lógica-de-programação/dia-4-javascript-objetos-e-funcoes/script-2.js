let info = {
  info1:{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  },
  info2:{
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  }
};

// EXERCÍCIO #1
console.log('Bem-vinda, ' + info.info1.personagem);

// EXERCÍCIO #2
console.log(info.info1);


// EXERCÍCIO #3
for (let index in info.info1){
  console.log(index);
}

// EXERCÍCIO #4
for (let index in info.info1){
  console.log(info.info1[index]);
}

// EXERCÍCIO #5 - REFAZER
  console.log(info.info1['personagem'] + " " + info.info2['personagem']);
  console.log(info.info1['origem'] + " " + info.info2['origem']);
  console.log(info.info1['nota'] + " " + info.info2['nota']);
  if (info.info1['recorrente'] === info.info2['recorrente']){  console.log("Ambos recorrentes");
  }

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
// EXERCÍCIO #6
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos["0"]["titulo"]);

// EXERCÍCIO #7
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})
console.log(leitor.livrosFavoritos);

// EXERCÍCIO #8
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");