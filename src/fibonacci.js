const fibonacci = (n) => {
  
  const arr = [];
  
  if (n < 0) {
    return arr;
  } else if ((n === 1) || (n === 0)) {
    arr.push(n);
    return arr;
  } else if (n === 2) {
    arr.push(1);
    arr.push(1);
    return arr;
  } else {
    let sum = 0;
    arr.push(1);
    arr.push(1);
    for (let index = 0; index < (n - 2); index++) {
      sum = arr[index] + arr[index + 1];
      arr.push(sum);
    }

    return arr;
  }
}

module.exports = fibonacci;