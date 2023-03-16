const fibonacci = (n) => {
  // your code here
  if(n<=0){
    return []
  }
  else if (n==1){
    return [0]
   } else if (n==2) {
    return [0,1];
  } else {
    let fibo = [0,1]
    for(let i = 2; i<n;i++){
      fibo.push(fibo[i-1]+fibo[i-2])
    }
  return fibo
  }
  
}

module.exports = fibonacci;
