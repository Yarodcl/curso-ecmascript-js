class User {};  //Declaración de una clase

//Instancia de una clase
//const newUser = new User(); 

class Person {
    //metodos
    greeting(){
        return 'Hola!';
    }
};

const entropyYL = new Person(); //Al agregar nuestra clase a una constante o let podemos llamarla según su metodo como se muestra abajo
console.log(entropyYL.greeting()); //Al ser una funcion debemos llamarla como tal
const developer = new Person();
console.log(developer.greeting());

//Constructor

class Human {
    constructor(){
        console.log('New Human');
    }
    greeting(){
        return 'Hola!';
    }
}

const Kevin = new Human();

//this 

class People {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hola!';
    }
    greeting(){
        return `${this.speak()} mi nombre es ${this.name}` //Recordar que los metodos siempre tienen que ir llamados como una funcion
    }
}

const Yarod = new People('Yarod');
console.log(Yarod.greeting());

//setters getters

class Entity{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hola!'
    }
    greeting(){
        return `${this.speak()} mi nombre es ${this.name}`
    }

    get eAge(){
        return this.age; //Get nos trae los datos guardados en el constructor del elemento indicado
    }
    set eAge(n){
        this.age = n; //Set nos permite cambiar la información de los datos del elemento indicado
    }
}

const dev = new Entity('Yarod', 21);
console.log(dev.eAge);
console.log(dev.eAge = 23);