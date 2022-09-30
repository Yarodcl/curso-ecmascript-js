async function* AsyncGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = AsyncGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hola!!');

async function arraysOfNames(array){
    for await (let value of array){
        console.log(value)
    }
}

const names = arraysOfNames(['Kevin','Jordan','Leeloo','Yarod']);
console.log('AFTER');