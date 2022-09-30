const anotherFunction = () => {
    return new Promise((resolve,reject) =>{
        (true)
        ? resolve('Funciona')
        : reject('Ups!')
    })
}

anotherFunction()
    .then(response => console.log(response)) //Si queremos atrapar nuestro error, nuestro then debera ir sin ";"
    .catch(err => console.log(err))
    .finally(()=> ('FinalLy'));