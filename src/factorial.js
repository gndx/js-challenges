const factorial = (number) => {
  // your code here
  let t = 1;
    for(i = 1; i<= number; i++){
      t = t * i;
    }
   return t;
}

module.exports = factorial;