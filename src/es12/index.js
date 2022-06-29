//remplaceAll
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.';
//Anteriormente con remplace
const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString);
//Ahora con remplaceAll
const replacedString1 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString1);

//metodos privados
//Ejemplo de metodo no privado
class Message {
    show(val) {
        console.log(val);
    }
}

const message = new Message();
message.show('Hola');

//ejemplo de metodo privado y añadiendo getters y setters
class Message1 {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        ...
    };
}

const message1 = new Message1();
message1.show('Hola');

//Promise any
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//Objeto weakref que es un objeto que permite mantener una referencia decil, permitiendo que el objeto no sea recogido por el garbage collector
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}
}

//Expresiones y operadores.
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
let isTrue1 = undefined;
let isFlase1 = undefined;
console.log(isTrue1 ??= isFlase1);