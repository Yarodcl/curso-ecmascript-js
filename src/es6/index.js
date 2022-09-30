


function newfunction (name, age, country){ //Esta era la forma anterior de inicializar una funcion, antes de ES6
    var name = name;
    var age = age;
    var country = country;
    console.log(name, age, country);
};
 
//ES6

function newfunction2(name = `Yarod`, age = 20, country = `Chile`){ //Podemos declarar los datos dentro de los parametros de una funcion
    console.log(name,age,country);
};

newfunction2(); //Si no le damos ningun argumento, usará los por defecto
newfunction2(`Juan`, 35, `Colombia`); //Si se los damos, usará los que le demos

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

//Destructuracion de elementos antes de ES6

let person = {
    name: `Yarod`,
    age: 32,
    country: "CL"
};

console.log(person.name, person.country); //Teniamos que llamar al objeto y luego su atributo

//Destructuracion de elementos despues de ES6

let { name, age } = person; //Podemos crear una variable con los atributos del objeto y despues llamarla
console.log(name,age);

//Operador de propagacion ES6, nos sirve para juntar listas de elementos a través de los tres puntos "..."

let team1 = [`Yarod`,`Diego`,`Javier`];
let team2 = [`Carlos`, `Fernando`, `Victor`];

let education = [...team1, ...team2] //Es una forma de unir los string anteriores a otros, puede ir tanto vacio como con más datos
console.log(education); 

//Variables ES6

var hola = "Hola";

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global let";
}

console.log(globalVar); //Var tiene un scope global, sin importar donde pongamos var, siempre se podrá llamar
console.log(globalLet); //Let tiene un scope de bloque, solo se dispone en el bloque de codigo donde fue definido.

const a = `b`; //Cuando le damos valores a una constante es imposible que esta pueda tomar otro, por más que queramos. 
a = `a`; //Aqui tratamos de darle un nuevo valor, pero no se nos fue posible hacerlo
console.log(a);

let nombre = `Yarod`;
let edad = 32;

//Forma de crear un obeto antes de ES6
obj = { nombre: nombre, edad: edad };

//Forma actual y mas comoda de crear un objeto, este mismo toma el valor de las variables anteriormente declaradas
obj2 = {nombre, edad};

console.log(obj2);

const names = [
    {name: `Yarod`, age: 20},
    {name: `Juan`, age: 25}
]

//Iteracion de arrays antes de ES6
let listOfNames = names.map(function(item){
    console.log(item.name);
});

//Iteraciones de arrays actuales.
let listOfNames2 = names.map(item => console.log(item.name)); //Al usar una funcion anonima podemos usar las arrows functions "=>" que hacen más amigable
//y corto nuestro codigo, incluso lo hace más legible (Las arrows functions son funciones anonimas)

//Promesas en JS: En algun momento, algo pasará

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve(`Si!`);
        }
        else{
            reject(`No!!!!`);
        }
    });
};

helloPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error));  

//Objetos ES6

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){ //Creamos un metodo del objeto y lo podemos invocar despues
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator(); //Creamos una variable que contenga nuestro objeto para manejarlo
console.log(calc.sum(2,2));

//Import, export ES6
//Revisar archivo module

import { hello } from `./module`;


hello();


//Generators ES6
function* helloWorld(){ //Los generators son funciones especiales que se definen con "function*"
    if(true){
        yield `Hello, `; //Yield es una variable que guarda información y se pude complementar con otras más adelante
    }
    if (true){
        yield `World`;
    }
};

const HelloGenerator = helloWorld();
console.log(HelloGenerator.next().value); //Este metodo nos permite traer el atributo de esos yield
console.log(HelloGenerator.next().value);