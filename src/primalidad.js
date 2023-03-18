const trialDivision = (number) => {
    number= Math.floor(number)
  let isPrimo= true
  if(number <= 1){
    isPrimo= false
  }
 
    for(let i= 2; i<number; i++){
      if(number % i === 0){
        isPrimo=false
      }
    }

    return isPrimo
  
}
  

module.exports = trialDivision;
