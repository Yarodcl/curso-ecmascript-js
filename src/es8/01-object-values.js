//Object.values

const dataV = {
    frontend: `Yarod`,
    backend: `Kevin`,
    design: `Leelo`,
}

const values = Object.values(dataV);

console.log(values); //Solamente devolverá los valores de nuestro objeto dentro de un array

//Object Keys

const Keys = Object.keys(dataV);
console.log(Keys); //Solamente nos traerá las llaves de nuestro objeto dentro de un array