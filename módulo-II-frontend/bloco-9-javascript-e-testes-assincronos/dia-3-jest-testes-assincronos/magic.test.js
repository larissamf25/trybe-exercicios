// require('./fetchSimulator');
// const { getMagicCard } = require('./magic.js');
// const { card } = require('./card');

// describe('Testa a função getMagicCard', () => {
//   it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
//     const response = await getMagicCard('130550');
//     expect(response['name']).toBe('Ancestor\'s Chosen');
//   });
//   it('Deve verificar se getMagicCard é uma função', () => {
//     expect(typeof getMagicCard).toBe('function');
//   });
//   it('Deve verificar se getMagicCard chama uma fetch', async () => {
//     await getMagicCard('130550');
//     expect(fetch).toHaveBeenCalled();
//   });
//   it('Deve verificar se getMagicCard foi chamada com um endpoint específico', () => {
//     getMagicCard('130550');
//     expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
//   });
//   it('Deve verificar se o retorno de getMagicCard está correto', async () => {
//     const expected = {
//       name: "Ancestor's Chosen",
//       manaCost: "{5}{W}{W}",
//       types: [ "Creature" ],
//       subtypes: [ "Human", "Cleric" ],
//       rarity: "Uncommon",
//     };
//     expect(await getMagicCard('130550')).toEqual(expected);
//   });
//   it('Deve verificar o erro lançado ao passar um ID desconhecido para getMagicCard', async () => {
//     expect(await getMagicCard('idDesconhecido')).toEqual(new Error('Id is not found!'));
//   });
// });

const { saveFavoriteMagicCard } = require('./magic.js');
const favoriteCards = require('./favoriteCards.js');

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => retrievesFavoriteCards());
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[favoriteCards.length - 1]['name']).toBe('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    const names = favoriteCards.map((card) => card.name);
    const expectedArray = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(names).toEqual(expectedArray);
  });
});