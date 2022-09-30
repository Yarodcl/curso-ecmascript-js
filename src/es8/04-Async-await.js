const fnAsunc = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Async'), 2000) //En un if ternario el "?" representa el if
            : reject(new Error('Error')) //Mientras que los ":" representa el else
    });
}

const anotherFn = async () => {
    const something = await fnAsunc();
    console.log(something   );
    console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After')