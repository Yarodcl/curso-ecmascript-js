class Entity{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return 'Hola!'
    }
    greeting(){
        return `${this.speak()} mi nombre es ${this.name}`
    }

    get #eAge(){
        return this.age; //Get nos trae los datos guardados en el constructor del elemento indicado
    }
    set #eAge(n){
        this.age = n; //Set nos permite cambiar la información de los datos del elemento indicado
    }
}

const dev = new Entity('Yarod', 21);
console.log(dev.eAge);
console.log(dev.eAge = 23);

/* Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase. */