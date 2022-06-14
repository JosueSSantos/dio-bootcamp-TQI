
var arrayListModel = [1,2];
function arrayList(array , num1){
    try{
  
        if(!array && !num1)
         throw new ReferenceError("Envie os parametros!!");
    if(typeof array !== 'object') 
        throw  new TypeError("O array precisa ser do tipo Object");
    if(typeof  num1 !== 'number') 
        throw new TypeError("O Num precisa ser do Tipo Number");
    if(array.length !== num1)  
        throw new RangeError("Tamanho Invalido");
    return array
    
}
     catch( e){
        if(e instanceof ReferenceError ){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else if( e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
        }else{
            console.log("Ocorreru um tipo de Erro não mapeado"+ e);
        }

    }

}
console.log(arrayList([1,2,3,4,5],5));