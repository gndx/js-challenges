const fibonacci = (number) => {
  let array = [1, 1];
  for (let i = 2; i < number; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array.slice(0, number);
}

module.exports = fibonacci;