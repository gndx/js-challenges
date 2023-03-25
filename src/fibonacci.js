const fibonacci = (n) => {
	const answer = [];
	let backCounter = 0;
	let frontCounter = 1;

	for (let index = 1; index <= n; index++) {
		answer.push(frontCounter);

		const backupCounter = backCounter;
		backCounter = frontCounter;
		frontCounter += backupCounter;
	}
	return answer;
};

module.exports = fibonacci;
