const fibonacci = (number) => {
  // your code here
  const result=(n)=>{
    if(n<=1)return [1,1];
    
    let r = result(n-1);
    r.push(r[r.length - 1] + r[r.length - 2]);
    return r;
  }
  return number==1?[1]:result(number-1)
}


module.exports = fibonacci;