export const fibonacci=(numero)=>{
    let x=0,y=1,z=1;
    const fibonacci=[]
 
      for(let i=1;i<numero;i++){
    z=x+y;
    fibonacci.push(z);
    x=y;
    y=z;
      }
    return   `serie Fibonacci of the number ${numero} : 1, ` +fibonacci;
    }