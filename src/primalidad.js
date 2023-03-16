const trialDivision = (number) => {
  //debe ser mayor que 1
  if( number <= 1) return false;

  //Debe ser entero
  if(number % 1 > 0) return false;

  // Revisamos todos sus numeros menores a number , solo los impares
  for(let i=3; i < number; i +=2){
    if(number % i ===0)  return false;
  }

  return true;
}
// console.log(trialDivision(199.5));
module.exports = trialDivision;