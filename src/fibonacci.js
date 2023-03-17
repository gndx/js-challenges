const fibonacci = (n) => {
  let arrayFibonacci = Array(n);
  for (let i=0; i<n; i++){
    if (i<=1){
      arrayFibonacci[i]=1;
    }
    else{
      arrayFibonacci[i]=(arrayFibonacci[i-1]+arrayFibonacci[i-2]);
    }
  }
  return arrayFibonacci;
}
module.exports = fibonacci;