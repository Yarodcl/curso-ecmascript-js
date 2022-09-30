//Object.entries

const data = {
    frontend: `Yarod`,
    backend: `Kevin`,
    design: `Leelo`
}

const entries = Object.entries(data); //Es necesario tener la O mayus.

console.log(entries); //Lo que hará Object.entries es pasar los objetos a un array

//Object.values

const dataV = {
    frontend: `Yarod`,
    backend: `Kevin`,
    design: `Leelo`,
}

const values = Object.values(dataV);

console.log(values); //Solamente devolverá los valores de nuestro objeto

//Padding

const string ="Hola"; //Padding nos ayuda a agregar caracteres tanto al inicio como al final de un string
console.log(string.padStart(7," Pi")) //Dentro de padStart hay que darle dos atributos, la cantidad de caracteres que queremos agregar (contando los que ya tiene la cadena) y lo que queramos agregar
console.log(string.padEnd(9," Pito"));


//Promesas
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
            ? setTimeout(()=> resolve(`Hello World`),3000)
            : reject(new Error(`Test Error`))
    })
}

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error){
        console.log(error);
    }
};