const fibonacci = (n) => {

  let arr0 = [0]
  let arr1 = [1]
  let arr = [0, 1]

  for(i=2; i < n+1; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  if(n === 0){
    return arr0
  } if(n === 1){
    return arr1
  }else{
    arr.shift()
    return arr;
  }
}

module.exports = fibonacci;