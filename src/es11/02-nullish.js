const anotherNumber = null;
const validate = anotherNumber ?? 5; //El operador nullish se representa con "??" y valida si el valor entregado en nulo, OJO, nulo es distinto que 0;
console.log(validate); //5

/* Diferencia entre el operador OR y el Nullish coalescing
🔨 El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN, undefined o null.
.
Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable, que no sea null o undefined. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo. */

const id = 0;

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log( orId ) //  'Sin id'
console.log( nullishId )  // 0

