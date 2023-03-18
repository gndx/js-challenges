const trialDivision = (number) => {
  // your code here
  if (number < 2 || number % 1 !== 0) {
    return false;
  }
  const primes = new Array(number + 1).fill(true);
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= number; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes[number];
}

module.exports = trialDivision;