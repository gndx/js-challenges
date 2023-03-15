 export const factorial=(numero)=>{
 let Factorial=1;  
   for(let i=1;i<=numero;i++){
 Factorial=Factorial*i;
   }
   return `serie Factorial of the number ${numero} : `+Factorial;
}

