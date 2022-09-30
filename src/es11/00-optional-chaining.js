const users = {
    yarodLA: {
        country: 'CL'
    },
    exe: {
        country: 'AR'
    },
    ana: {
        country: 'MX'
    }
}

console.log(users.yarodLA.country); //Encadenamos cada uno de los elementos del objeto para acceder a un nivel de profundidad deseado
console.log('Optional Chaining')
console.log(users.pau?.country); //Optional Chaining nos permite validar si los datos existen o no sin romper nuestro codigo

/* No abuses del encadenamiento opcional
🔗 El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.
.
Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.
.
Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado. */