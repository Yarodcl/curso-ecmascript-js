import fetch from "node-fetch";

const response = await fetch('https://api.escuelajs.co/api/v1/products'); //Gracias a top level await es innecesario usar la palabra reservada async para usar await
const products = await response.json();

export{ products };