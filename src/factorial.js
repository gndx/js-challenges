// Next function calculates factorial of a given number.

function factorial(number)
{
  aux=number;
  for(let i = number-1; i > 1; i--)
  {
    aux *= i;
  }
  return(aux);
};

// console.log(factorial(5)); // 120
// console.log(factorial(9)); // 362880
// console.log(factorial(15)); // 1307674368000

module.exports = factorial;