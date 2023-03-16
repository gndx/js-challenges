//app para detectar si un numero es primo. SOLO ADMITE NUMEROS POSITIVOS

const trialDivision = (number) => {
	if (typeof number !== "number")
		return console.error(`${number} is not of type number❗`);
	if (
		number <= 0 ||
		!Number.isInteger(number) ||
		number === " " ||
		number === ""
	)
		return false;

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return number !== 1;
};

module.exports = trialDivision;
