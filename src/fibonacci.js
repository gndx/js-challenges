const fibonacci = (n) => {
  // your code here
  let a = 1;
  let b =0;
  let arreglo = [];

  for (let i=1; i <= n; i++){
    c = a + b;
    a = b;
    b =c;
    arreglo.push(c);
  } 

  return arreglo;
}

module.exports = fibonacci;