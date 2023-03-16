const fibonacci = (n) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const series = fibonacci(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}
// console.log(fibonacci(8)); 

module.exports = fibonacci;