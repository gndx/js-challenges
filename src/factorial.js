const factorial = (number) => {
  // your code here
  var  result = 1;
  if(number!=0){
    for (let i = 1; i <=number; i++){
      result=result*i;
    }
    return result;
  }

  else { 
    return 1 ;
  }
  
}

module.exports = factorial;