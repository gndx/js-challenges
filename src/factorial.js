const factorial = (number) => {
  
  let sol = 1;

  while(number){
    sol *= number;
    number--;
  }

    return sol;
}

module.exports = factorial;