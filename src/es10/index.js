//Ejercicio 1
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));


let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));

//Ejercicio2
let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'hello world      ';
console.log(hello1);
console.log(hello1.trimEnd());

//Ejercicio3
//Anteriormente
try {

} catch (error){
    error;
}

//Ahora
try {

} catch {
    error;
}

//Ejercicio 4
//Convertir de array a objetos
let entries = [['name', 'junior'],['age','32']];
console.log(Object.fromEntries(entries));

//Ejercicio 5
//Objeto de tipo simbolo para acceder a una descripcion
let mySymbl = `My Symbol description`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);