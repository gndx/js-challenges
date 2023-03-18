const fibonacci = (n) => {
  let array= [1,1]
    if(n=== 1){
        array = [1]
    }
    else{
    for(let i= 2; i<n; i++){
        let arrayElement= array[array.length-2] + array[array.length-1]
        array.push(arrayElement)
    }
    }
    return array
}

module.exports = fibonacci;