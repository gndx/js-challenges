const fibonacci = (n) => {
  let succession = [1, 1];
  // conditional from number 1
  if(n == 1)
    return [1];
  // iteration from number 2
  for( i = 2; i < n ; ++i){
    succession[i] = succession[i - 1] + succession[i - 2];
  }
  // result 
  return succession
}

module.exports = fibonacci;