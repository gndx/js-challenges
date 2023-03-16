const factorial = ( number ) => {
  // your code here
  if ( number === 0 || number === 1)  {
    return 1
  }
  let facto = 1
  for ( let index = 2; index <= number; index++ ) {
    facto = facto * index
  }
  return facto
}

module.exports = factorial;