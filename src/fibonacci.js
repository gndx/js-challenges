const fibonacci = (n) => {
  let num = parseInt(number);
  if (isNaN(num)) {
    return false;
  }else {
    const sequence = [];
    sequence.push(0, 1);

    for (let i = 2; i <= n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
    
    return sequence;
  }
}

module.exports = fibonacci;