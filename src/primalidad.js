const trialDivision = (number) => {
  // your code here
  let a=0
  for (i=1;i<=number;i++){

    if(number%i == 0){
      a=a+1;
    }

  }
  if(number==1){
    return false 
  }
  
  else if (a==2){
    return true
  }

  else {
    return false
  }


}

module.exports = trialDivision;