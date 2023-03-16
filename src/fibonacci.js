const fibonacci = (n) => {
 let a = 0, b =1, aux;
 let res = [];

  for(let i=0; i < n; i++){
    res.push(b);

    aux = a + b;
    a = b;
    b = aux;
  }

  return res
}

module.exports = fibonacci;