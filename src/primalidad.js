const trialDivision = (number) => {
  // your code here
  for (let i =2; i< Math.trunc(number); i++){
    if ((number  % i === 0 ) )
      return false;
  }

  if ((number < 2 ) ||  (number % 1 != 0) ) return false 
  else return true;
}

module.exports = trialDivision;





console.log(trialDivision(2));
console.log(trialDivision(3));
console.log(trialDivision(5));
console.log(trialDivision(11));
console.log(trialDivision(191));

console.log(trialDivision(25));
/**/
