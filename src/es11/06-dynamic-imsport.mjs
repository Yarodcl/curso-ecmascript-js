const button = document.querySelector('.btn');
const parrafo = document.querySelector('.parraf');
button.addEventListener('click', async function (){ //Dynamic import nos permite saltarnos varios pasos en un import normal y poder generar estos exports e import en una sola linea de codigo. revisar module.mjs
    const module = await import('./module.mjs');
    console.log(module);
    module.hello();
});