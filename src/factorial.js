const factorial = (number) => {
if (number === 0 || number === 1) {
return 1;
}
return number * factorial(number - 1);
}
var resultado = String(factorial(20));
var conPuntos = "";
for (let i = 0; i < resultado.length; i++) {
  var digitos = resultado.length % 3;
  if (i >= digitos && i % 3 === digitos) {
    conPuntos += ".";
  }
  conPuntos += resultado[i];
}
console.log(conPuntos);
module.exports = factorial;