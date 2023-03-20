const trialDivision = (number) => {
    for(i = 2; i< number; i++){

    if(number % i === 0){
    return false
    }
    }if(number === 0 || number === 1 || number < 0  || Number.isInteger(number) === false ){
    return false
    }else{
    return true
    }
}

module.exports = trialDivision;