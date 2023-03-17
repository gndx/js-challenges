const fib = (n) => {
  if(n<=1) {
    return n
  }else{
    return parseInt(fib(n-1)) + parseInt(fib(n-2))
  }
}

const fibonacci = (n) => {
  let res = []
  for(let i = 1; i<=n; i++){
    res.push(fib(i))
  }
  return res
}

module.exports = fibonacci;
