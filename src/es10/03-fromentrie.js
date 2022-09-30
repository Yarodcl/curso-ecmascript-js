//Object.entries aparte de convertir un objeto en un array de arrays, nos permite hacer una logica inversa y nos deja convertir una array de arrays en un objetos.

const array = ([["name","Yarod"], ["age", 21]]);
console.log(array);
console.log(Object.fromEntries(array)); //El array se convierte en un objeto