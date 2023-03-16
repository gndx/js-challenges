// Next function calculates returns True if a number is prime. If it's not a prime then it returns false

function primalidad(number)
{
  if (number == 2)
  {
    return(true);
  }
  else if (number % 1 !=0 || number <= 1)
  {
    return(false);
  }
  else
  {
  for(let i = 2; i <= (number/2+1); i++)
    {
      if (number%i==0)
      {
        return(false);
      }
    }
    return(true);
  }
}; 

//console.log(primalidad(13)) //true
//console.log(primalidad(14)) //false

module.exports = primalidad;
