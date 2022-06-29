//dynamic import
const button = document.getElementById('btn');
button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

//big int
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);

//Promise que se resuelve despues de que se resuelven las demas
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//GlobalThis
console.log(window);
console.log(globalThis);

//Operador nulo
const fooo = null ?? 'default string';
console.log(fooo);

const feee = 'testing' ?? 'default string';
console.log(feee);

//Optional shaining
const user = {};
//Por lo general esto rompe la aplicacion al no tener el objeto
console.log(user.profile.email);
//Con esta opcion no romple la aplicacion
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('Tenemos email');
} else {
    console.log('Fail');
}