//Forma anterior a ES6 para concatenar variables
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ` ` + world;
console.log(epicPhrase);

//Forma actual para poder concatenar variables
let epicPhrase2 = `${hello} ${world}`; //Usamos el "${}" para llamar a la variable, tiene que estar dentro de unas comillas francesas "``"
console.log(epicPhrase2);

//Multilinea en los strings antes de ES6

let lorem ="Hola, soy el intento de un texto largo \n"
+ "e intento hacerla más larga"

//Multilinea en los strings despues de ES6

let lorem2 = `Soy otro intento de texto largo
ahora lo estoy haciendo más largo`;

console.log(lorem);
console.log(lorem2);