try{
    hello();
} catch(error){
    console.log(error);
} //Anteriormente nos arrojaba el error dentro de un objeto

try{
    hello();
} catch{
    console.log('Soy un error :)');
} //Actualmente JS nos permite personalizar ese mensaje de error, podemos dar tanto un mensaje como una logica de programación


