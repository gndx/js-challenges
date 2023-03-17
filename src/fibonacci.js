const fibonacci = (n) => {
  var fibo = [];
    if ( n <= 1 ) {
      fibo.push(n);
      return fibo;
    } else {
      var fibo = [1, 1];
      for (var i = 2; i < n; i++) {
        fibo[i]=(fibo[i - 2] + fibo[i - 1]);
      }
      return fibo;
    }
}
    
console.log(fibonacci(7));

module.exports = fibonacci;