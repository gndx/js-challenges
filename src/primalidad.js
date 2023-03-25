const trialDivision = (number) => {
	if (number <= 1 || number % 1) return false;

	for (let index = 2; index < number; index++) {
		if (!(number % index)) return false;
	}
	return true;
};

module.exports = trialDivision;
