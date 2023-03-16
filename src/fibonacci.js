const fibonacci = (n) => {
	//primero determino que n sea un numero entero positivo
	if (typeof n !== "number")
		return console.error(`${n} is not of type number❗`);
	if (n <= 0 || !Number.isInteger(n) || n === " " || n === "")
		return console.error(`${n} is not a positive integer❗`);

	//creo un array vacio para ir agregando los numeros de la secuencia
	let fibo = [];

	//creo un bucle que recorra el array hasta que su longitud sea igual a n
	for (let i = 0; i < n; i++) {
		//si la longitud del array es menor a 2, agrego el numero 1
		if (fibo.length < 2) {
			fibo.push(1);
		} else {
			//si la longitud del array es mayor o igual a 2, agrego la suma de los dos ultimos numeros del array
			fibo.push(fibo[i - 2] + fibo[i - 1]);
		}
	}
	return fibo;
};

module.exports = fibonacci;
