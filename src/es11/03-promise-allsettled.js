const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.allSettled([promise1,promise2,promise3]) //Nos permite revisar todas las resoluciones de nuestras promesas dentro de un objeto
    .then(response => console.log(response));

    