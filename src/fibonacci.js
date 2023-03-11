const fibonacci = (n) => {
  let numbers = [];

  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      numbers.push(1);
    } else {
      numbers.push(numbers[i-1] + numbers[i-2]);
    }
       
  }

  return numbers;

}

module.exports = fibonacci;