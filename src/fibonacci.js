const fibonacci = (n) => {
  var a = 1, b = 0, temp;
  var array=new Array();

  while (n-1 >= 0){
    temp = a;
    a = a + b;
    b = temp;
    array.push(b);
    n--;
  }

  return array;
}

module.exports = fibonacci;