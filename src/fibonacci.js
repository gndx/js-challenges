const fibonacci = (n) => {
 let sol = [], num1 = 0, num2 = 1, intercambio;

 while(n--){
    sol = [...sol, num2];
    intercambio = num1+num2;
    num1 = num2;
    num2 = intercambio
 }

 return sol;
}

module.exports = fibonacci;