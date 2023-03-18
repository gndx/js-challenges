const factorial = (number) => {
  let result= 1
    if(number != 0){
        for(let i=1; i<= number ;i++){
            
            result = result * i
        }
    }else{
        result= 1
    }
    return result
}

module.exports = factorial;