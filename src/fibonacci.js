const secuenciaFibo = (n) => {
  if (n <= 1)
    return n
  else
    return parseInt(secuenciaFibo(n-1))+parseInt(secuenciaFibo(n-2))
}

const fibonacci = (n) =>{
  let fibo = []
  for(let i=1; i<=n; i++){
    fibo.push(secuenciaFibo(i))
  }
  return fibo
}

module.exports = fibonacci;