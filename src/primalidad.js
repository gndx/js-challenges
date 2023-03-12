const trialDivision = (number) => {
  // your code here 
      if (number < 2){ 
        return false; 
    }
 
    let divisor = 2; 
    while (divisor < number) { 
        if (number % divisor == 0){ 
         return false; // No es primo 
     } else {  
            divisor++; // Intenta con otro divisor 
        }             
   }

   return true;   
}

module.exports = trialDivision;