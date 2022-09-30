// Las funciones flecha es una alternativa compacta a una expresion de funcion tradicional, la misma es limitada y no se puede utilizar en todas las situaciones.
// No tiene sus propios enlaces a this o super y no se debe usar como metodo.
//No tiene argumentos o palabras claves new.target
//No apta para metodos call, apply y bind, que generalmente se basan en establecer un ambito o alcance
//No se puede usar como constructor
//No se puede usar yield dentro de su cuerpo


//Funciones antes de ES6
function square(num){
    return num * num
}

//Implementacion de funciones flecha en y despues de ES6

const square = (num) => {
    return num * num
}

const square = num => num * num; //Si teienemos un solo parametro, podemos poner el return de forma implicita sacando parentesis
