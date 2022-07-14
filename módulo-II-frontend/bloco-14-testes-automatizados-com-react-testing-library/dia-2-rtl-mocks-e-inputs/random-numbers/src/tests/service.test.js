function randomNumber() {
  return Math.floor(Math.random() * 100);
}

it('verify random number', () => {
  randomNumber = jest.fn();
  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
});

it('verify result random number', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
});

it('verify random number calls', () => {
  randomNumber = jest.fn();
  randomNumber();
  randomNumber();
  randomNumber();
  expect(randomNumber).toHaveBeenCalledTimes(3);
});

it('division function', () => {
  const randomNumber = jest.fn().mockImplementation((a,b) => a / b);
  randomNumber(10,5);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber(10,5)).toBe(2);
});

it('multiplication function', () => {
  let randomNumber = jest.fn().mockImplementation((a,b,c) => a * b * c);
  randomNumber(1,2,3);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber(1,2,3)).toBe(6);
  randomNumber.mockReset();
  randomNumber = jest.fn().mockImplementation((a) => 2 * a);
  randomNumber(2);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber(2)).toBe(4);
});

function uppercase(string) {
  let newString = '';
  for(let index = 0; index < string.length; index += 1) {
    newString += string[index].toUpperCase();
  }
  return newString;
}

function firstLetter(string) {
  return string[0];
}

function concate(str1, str2) {
  return str1 + str2;
}

it('new implement', () => {
  jest.spyOn(uppercase);
  let uppercase = jest.fn().mockImplementation((string) => {
    let newString = '';
    for(let index = 0; index < string.length; index += 1) {
      newString += string[index].toLowerCase();
    }
    return newString;
  });
  let firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);
  let concate = jest.fn().mockImplementation((a,b,c) => a + b + c);
  expect(uppercase('lArIsSa')).toEqual('larissa');
  expect(firstLetter('larissa')).toBe('a');
  expect(concate('larissa','menezes','freitas')).toEqual('larissamenezesfreitas');
  uppercase.mockRestore();
  expect(uppercase('lArIsSa')).toEqual('LARISSA');
});

const getDog = async () => {
  const result = await fetch('https://dog.ceo/api/breeds/image/random');
  const final = await result.json();
  return final.message;
}

it('dog success', async () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      message: "https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg",
      status: "success",
    })
  }));
  getDog();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://dog.ceo/api/breeds/image/random');
  expect(global.fetch.status).toBe('success');
});

it('dog failed', async () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      message: "https://images.dog.ceo/breeds/tervuren/yoda_in_garden.jpg",
      status: "failed",
    })
  }));
  getDog();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://dog.ceo/api/breeds/image/random');
  expect(global.fetch.status).toBe('failed');
});