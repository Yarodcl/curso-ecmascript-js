const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3'); //Nos sirve para encadenar elementos a los objetos instanciados

console.log(list);

/* //Para manipular estas estructuras de datos, existen los siguientes métodos:

add(value): añade un nuevo valor.
delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
has(value): retorna un booleano si existe o no el valor dentro del Set.
clear(value): elimina todos los valores del Set.
size: retorna la cantidad de elementos del Set. */