//Flat
console.log('Flat');
const array = [2,4,5,[3,2,4,[1,2]]];
console.log(array.flat(2)); //Flat nos permite aplanar un array que tenga profundidad, es decir, que tenga más array dentro del mismo. Recordar que al igual que los indices se empieza a contar desde el 0.

//flat map
console.log('Flat Map');
const array2 = [1,4,9,3];

console.log('Ejemplo 1');
console.log(array2.flatMap( v => [v + 1])); //Flat map permite hacer operaciones y agregar elementos al array según le indiquemos, este ejemplo sumará uno al valor


console.log('Ejemplo 2');
console.log(array2.flatMap(v => ['Texto', v * 2])); //Este nos devolverá la palabra "texto" por cada indice y multiplicará cada indice por 2
