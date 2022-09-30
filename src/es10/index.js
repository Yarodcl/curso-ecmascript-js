//flat

let array = [1,2,3, [1,2,3, [1,2,3]]]; //ES10 nos permite tener profundidad en nuestro array

console.log(array.flat(2)) //Array flat recibe la profundidad, es decir, dependiendo del numero de posiciones de profundidad será lo que podamos ingresar. Recordar que siempre se ingresa desde el 0

//flatMap
let array2 = [1,2,3,4,5];

console.log(array2.flatMap(a => [a, a *2])); //Nos permite en un solo array regresar la operacion que le estemos dando

//trimStart
let hello = `       Hello World`;

console.log(hello);
console.log(hello.trimStart()); //Nos sirve para eliminar espacios vacios al inicio de un string

let kevito = `El pico es weno    a        `

console.log(kevito);
console.log(kevito.trimEnd()); //Nos sirve para eliminar el espacio vacio al final de un string

try{

} catch{
    error
}

//fromEntries

let entries = [["Name", "Yarod"], ["age", 21]];

console.log(entries);
console.log(Object.fromEntries(entries));

let kevito2 = `Hola, soy Kevin y soy gay`;
let kevi = Symbol(kevito2)
console.log(kevi.description);

