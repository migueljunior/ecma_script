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