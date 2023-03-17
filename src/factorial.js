const factorial = (number) => {
  // Excepcion para 0
  if(number == 0){
    return 1;
  }

  var res = number;

  while(number>1){
    res = res*(number-1);
    number--;
  }

  return res;
  // \_0>
}

module.exports = factorial;