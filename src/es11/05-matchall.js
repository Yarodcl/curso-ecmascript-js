//Es una forma para filtrar textos o strings, buscar, etc, según sea el caso.

const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc, etc'

for (const match of fruit.matchAll(regex)){
    console.log(match);
}