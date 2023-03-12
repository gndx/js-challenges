const fibonacci = (n) => {
  // your code here

    let a = 0, b = 1, temp; 
        if (n == 0) 
            return a; 
       if (n == 1)  
            return b; 
    
        while (n >= 0){ 
            temp = a + b; 
            a = b; 
            b = temp;  
            n--;       }     
    
       return b; 
}

module.exports = fibonacci;