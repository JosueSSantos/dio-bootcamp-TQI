
// Montar Schema onde retor e monte dados apos alguns segundos

async function resolvePromise(){

    const  myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('resolvida')
        },2000);
    });
    let result;  
    try{
        result = await myPromise 
                            .then((result) => result +', Tem esse texto')
                            .then((result) =>  result + ', Mais esse aqui e cabou')
    }catch(err){
        result = err.mensage; 
    }
                         
    return result
};