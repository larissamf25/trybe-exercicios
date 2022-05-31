const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee} = require('/home/larissa/Documents/Trybe/Trybe-exercícios/módulo-I-fundamentos/bloco-7-introdução-a-javascript-es6-e-testes-unitários/dia-3-primeiros-passos-em-jest/my_new_project/sum');

describe ('The sum function', () => {
  it('returns 9 when sum(4,5)',() => {
    expect(sum(4,5)).toBe(9);
  });
  it('returns 4 when sum(1,3)',() => {
    expect(sum(0,0)).toBe(0);
  });
  it('throw an error when tries to sum a string',() => {
    expect(() => sum(4,'5')).toThrow(Error);
  });
});

describe ('The myRemove function', () => {
  it('returns [1, 2, 3, 4] when myRemove([1, 2, 3, 4],3)',() => {
    expect(myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4]);
  });
  it('returns [1, 2, 4] when myRemove([1, 2, 3, 4],3)',() => {
    expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4]);
  });
  it('returns [1, 2, 3, 4] when myRemove([1, 2, 3, 4],5)',() => {
    expect(myRemove([1, 2, 3, 4],5)).toEqual([1, 2, 3, 4]);
  });
});

describe ('The myFizzBuzz function', () => {
  it('returns fizzbuzz when myFizzBuzz(15)',() => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('returns fizz when myFizzBuzz(6)',() => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('returns buzz when myFizzBuzz(10)',() => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('returns 2 when myFizzBuzz(2)',() => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('returns false when myFizzBuzz(a)',() => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});

describe ('The encode function', () => {
  it('is a function',() => {
    expect(typeof encode).toEqual('function');
  });
  it('returns 1 when encode(a))',() => {
    expect(encode('a')).toBe('1');
  });
  it('returns 2 when encode(e))',() => {
    expect(encode('e')).toBe('2');
  });
  it('returns 3 when encode(i))',() => {
    expect(encode('i')).toBe('3');
  });
  it('returns 4 when encode(o))',() => {
    expect(encode('o')).toBe('4');
  });
  it('returns 5 when encode(u))',() => {
    expect(encode('u')).toBe('5');
  });
  it('returns b when encode(b))',() => {
    expect(encode('b')).toBe('b');
  });
  it('returns the same length of the parameter)',() => {
    expect(encode('a').length).toBe(1);
  });
});

describe ('The decode function', () => {
  it('is a function',() => {
    expect(typeof decode).toEqual('function');
  });
  it('returns a when encode(1))',() => {
    expect(decode('1')).toBe('a');
  });
  it('returns e when encode(2))',() => {
    expect(decode('2')).toBe('e');
  });
  it('returns i when encode(3))',() => {
    expect(decode('3')).toBe('i');
  });
  it('returns o when encode(4))',() => {
    expect(decode('4')).toBe('o');
  });
  it('returns u when encode(5))',() => {
    expect(decode('5')).toBe('u');
  });
  it('returns 6 when encode(6))',() => {
    expect(decode('6')).toBe('6');
  });
  it('returns the same length of the parameter)',() => {
    expect(decode('1').length).toBe(1);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se o ID existe', () => {
    expect(searchEmployee('8579-5','firstName')).toBe('ID não identificado');
  });
  it('Testa se a informação existe', () => {
    expect(searchEmployee('4678-2','adress')).toBe('Informação indisponível');
  });
  it('Testa se name de ID 4678-2 corresponde a Paul', () => {
    expect(searchEmployee('4678-2','firstName')).toBe('Paul');
  });
});