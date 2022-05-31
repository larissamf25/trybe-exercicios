//  EXERCÍCIO 7
// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// test ('Deve passar!', (done) => {
//   try {
//     expect(uppercase('larissa', (param) => {

//     })).toBe('LARISSA');
//     done();
//   } catch (err) {
//     done(err);
//   }
// });

//  EXERCÍCIO 9
// const { getPokemonDetails } = require("./pratica");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//     try {
//       expect(getPokemonDetails((element) => element.name === 'Larissa', (erro, message) => {
//         return (erro) ? erro : message;
//       })).toEqual(true);
//       done();
//     } catch (err) {
//       done(err);
//     }
    
//   });

//   it("retorna um pokemon que existe no banco de dados", () => {
//     expect(getPokemonDetails((element) => element.name === 'Squirtle', (erro, message) => {
//       return (erro) ? erro : message;
//     })).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
//   });
// });

//  EXERCÍCIO 10
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => { //  É INTERPRETADO COMO UM TESTE, ENTÃO TAMBÉM VAI RECEBER UM '1 - beforeEach' NO COMEÇO
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});