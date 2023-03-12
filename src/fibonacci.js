const fibonacci = (n) => {
  // your code here

    let a = 0, b = 1, temp, result = []; 
       
    while(n--){
      result = [...result, b];
      temp = a + b;
      a = b;
      b = temp;
    }

       return result; 
}

module.exports = fibonacci;