// Next function calculates returns True if a number is prime. If it's not a prime then it returns false

function primalidad(number)
{
  if (number < 1)
  {
    return(false);
  }
  else if (number < 3)
  {
    return(true);
  }
  else
  {
  for(let i = 2; i <= number/3; i++)
    {
      if (number%i==0)
      {
        return(true);
      }
    }
    return(false);
  }
};

//console.log(primalidad(13)) //true
//console.log(primalidad(14)) //false

module.exports = primalidad;