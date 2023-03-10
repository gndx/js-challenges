const fibonacci = (n) => {
  // your code here
 let output =[];

 if (n===1){
    output.push(1);
    return output;
 }
 else if (n===2){
    output.push(1,1);
    return output;
 }
 else {
    output.push(1,1);
    for(let i=2;i<n;i++){
        output.push(output[output.length-2]+
          output[output.length-1]);
    }
    return output;
 }
}


module.exports = fibonacci;