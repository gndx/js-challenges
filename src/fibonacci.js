const fibonacci = (n) => {
  var res = [];
  var a = b = 1;

  res.push(a)

  for(var i=0; i<(n-1); i++){
    b = a+b;
    a = b-a;
    res.push(a);
  }
  
  return res;
  // \_0>
}

module.exports = fibonacci;