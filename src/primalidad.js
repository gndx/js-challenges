const trialDivision = ( numero ) => {
  // your code here
  if ( numero <= 1 || numero % 1 !== 0 ) {
    return false
  }
  for ( let i = 2; i <= Math.sqrt( numero ); i++ ) {
    if ( numero % i === 0 ) {
      return false
    }
  }
  return true
}

module.exports = trialDivision;