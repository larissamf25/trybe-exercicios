function fibonacci(amount) {
  let array = [0,1];
  for (let index = 0; index < amount - 1; index += 1){
    array.push(array[index] + array[index + 1]);
  }
  return array.slice(1);
}

module.exports = fibonacci;