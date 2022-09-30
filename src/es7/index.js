//Includes, nos permite saber si hay un elemento dentro de un array

let number = [1,2,3,4,5,6,7,8];

if(number.includes(11)){ //Por ejemplo, aqui a través de un include validamos si el numero 11 se encuentra dentro de nuestro array de numeros
    console.log(`Si está el siete`);
}
else{
    console.log(`No ta:(`);
}

4 in number;
number.hasOwnProperty(10);


//Elevar a la potencia

const elevarPotencia = (base, exponente) => base ** exponente;
elevarPotencia(3,2);
