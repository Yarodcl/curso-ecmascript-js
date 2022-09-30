//ReplaceAll

const string = "El Kevin es terrible maraco, al Kevin le gusta el pedazo de tula";

const replaceString = string.replace("Kevin","Jordan");
console.log(replaceString);

const string2 = "El Kevin es terrible maraco, al Kevin le gusta el pedazo de tula";

const replaceString2 = string2.replaceAll("Kevin","Jordan");
console.log(replaceString2);

class Message {

    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show("Hola!");

//Operadores logicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);