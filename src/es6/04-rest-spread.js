//arrays destructuring

let fruits = ['apple', 'orange'];
let [a, b] = fruits; //Le asignamos un valor a los elementos del array según el orden en que ubiquemos nuestro let
console.log(a,b); //Devuelve los dos elementos del array
console.log(fruits[0], fruits[1]);

//Object destructuring

let user = { username: 'Yarod', age: 34 };
let {username, age } = user;
console.log(username, age); //Devuelve los elementos del objeto
console.log(user.username, user.age); //Esta es la forma antigua de llamarlos

//Spread operator

let person = { name: 'Yarod', age: 34 };
let country = 'CL';

let data = { id: 1,...person, country };
console.log(data);

//Rest

function sum(num, ...values){
    console.log(values);
    return num + values[1];
}

sum(1, 2, 3); //Se va a sumar el primer argumento con el valor del indice que indiquemos en el value