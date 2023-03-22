const fibonacci = (n) => {
  const fibo = []

  for (let i = 0; i < n; i++) {
    if (n <0) {
      throw new Error('n should be greater than or equal to 0');
    }
    else if (i === 0) {
      fibo.push(1);
    }
    else if (i === 1) {
      fibo.push(1);
    }else{
      fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
  }
  return fibo;
}

module.exports = fibonacci;