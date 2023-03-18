const fibonacci = (n) => {
  // your code here
  if (n === 0) return [];
  const fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }
  return fibArr.slice(1, n+1);
}
module.exports = fibonacci;

