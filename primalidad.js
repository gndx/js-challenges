export const primalidad=(numero)=>{
  let contador=0;
    for(let i=1;i<=numero;i++){
          if(numero%i==0){
            contador++;
          }
        }
        if(contador>2){
        
    return   `serie number : ${numero}  not numeroPrime`;
    }else{
        return   `serie number : ${numero} numeroPrime`;
    }
}