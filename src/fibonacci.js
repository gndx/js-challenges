const fibonacci = (n) => {
  // your code here
  let result= [1,1];
  if(n==1){
    result.shift();
    return result
  }

  else if (n==2){
    return result
  }
 
  else {
    for(i=2;i<n;i++){
      result[i]=result[i-1]+result[i-2];
    }
  }
  return result 
}

module.exports = fibonacci;