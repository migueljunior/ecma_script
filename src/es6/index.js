// Antiguamente asi se establecian los valores por defecto en una funcion
function newFunction(name, age, country){
    var name = name || 'Junior';
    var age = age || 32;
    var country = country || 'BO';
    console.log(name, age, country);
}

// Ahora en ES6 se agregaro la asignacion de los parametros de la siguiente forma
function newFunction2(name = 'Junior', age = 32, country = 'BO'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Juan', 23, 'CO');

//Template literals (COncatenación)
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea
// Anteriormente
let lorem = 'No gastes más tiempo argumentando acerca de lo que debe ser un buen hombre. Sé uno. \n'
+ 'Cuánto tiempo ahorra el que no se da la vuelta para ver lo que su vecino dice, hace o piensa.';
console.log(lorem);

// En ES6
let lorem2 = `En ningún lugar puede un hombre encontrar un retiro más tranquilo e imperturbable que en su propia alma.
Todo lo que escuchamos es una opinión, no un hecho. Todo lo que vemos es una perspectiva, no la verdad.`;
console.log(lorem2);

//Desestructuracion de elementos
let person = {
    'name': 'Junior',
    'age': 32,
    'country': 'BO'
}

// Anteriormente
console.log(person.name, person.age, person.country);

// ES6
let { name, age, country} = person;
console.log(name, age, country);

//Operador de propagacion
let team1 = ['Junior','Enrique','Andres'];
let team2 = ['Vivian','Julia','Alizon'];

// Anteriormente
let education1 = ['David','Junior','Enrique','Andres','Vivian','Julia','Alizon'];
// En ES6
let education = ['David', ...team1, ...team2];
console.log(education);

//Uso de let
{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);// Este si funciona
}

console.log(globalVar);
//console.log(globalLet);// Este no funciona

//Estas dos lineas siguientes daran error, pues se añadio const para que una variable sea inmutable.
const a = 'b';
a = 'a';

//Objetos
let name1 = 'junior';
let age1 = 32;

//Anteriormente
obj = { name: name1, age: age1};

//ES6
obj2 = { name1, age1 };
console.log(obj);
console.log(obj2);

// Arrow funtions
const names = [
    { name: 'Junior', age: 32},
    { name: 'Vivian', age: 29}
];

//Anteriormente
let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//ES6
let listOfNames2 = names.map(item => console.log(item.name));

//Otra forma de las arrow funtions
const listOfNames3 = (name, age, country) => {
    ...
};

const listOfNames4 = name => {
    ...
};

const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));