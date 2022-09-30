function* iterate(array){ //El asterisco es function es necesario para identificar un generator
    for (let value of array){
        yield value;
    }
};

const it = iterate(['Yarod', 'Kevin', 'Leelo', 'Jordan', 'Fernando']);
console.log(it.next().value); //Va a identificar el primero dentro del array gracias al Value, podemos seguir haciendo para seguir mostrando los elementos
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Si tenemos más next de los elementos del array, nos dará undefined