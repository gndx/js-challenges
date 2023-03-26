const fibonacci = (n) => {
  let r = [0, 1];

  for (let i = 2; i <= n; i++) {
    r.push( r.at(-1) + r.at(-2) );
  }

  return r.slice(1);
}

module.exports = fibonacci;