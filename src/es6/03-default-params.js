function newfunction (name, age, country){ //Esta era la forma anterior de inicializar una funcion, antes de ES6
    var name = name;
    var age = age;
    var country = country;
    console.log(name, age, country);
};
newfunction();
//ES6

function newAdmin (name = `Yarod`, age = 20, country = `Chile`){ //Podemos declarar los datos dentro de los parametros de una funcion
    console.log(name,age,country);
};
newAdmin();

