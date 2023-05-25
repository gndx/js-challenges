const fibonacci = (n) => {
  let fibArray = [];

  if (n === 1) {
    fibArray = [0];
  } else if (n === 2) {
    fibArray = [0, 1];
  } else {
    fibArray = [0, 1];

    for (let i = 2; i < n; i++) {
      const a = fibArray[i - 1];
      const b = fibArray[i - 2];
      fibArray.push(a + b);
    }
  }

  return fibArray;
};

module.exports = fibonacci;