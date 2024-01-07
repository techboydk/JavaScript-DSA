//1. Promise  ----> your friend 
//2. asynchronous operation (fetchTacos) ---->  while your friend on the way to food truck and you start preparind soup in meantime.
//3. Promise return value -----> when your friend texted that he can't/ can get tacos
//4. Promise is set to be fullfilled ------> can get tacos
//5. Promise is set to be rejected ------> can't get tacos
//6. Set up the table ------> success Callback
//7. Cook pasta instead ------> failure Callback



// what is Promises ---> A Promise is an Object in javascript and it is in one of the three states
//1. pending: initial state, neither fulfilled nor rejected.
//2. fulfilled: meaning that operation completed successfully.
// 3. rejected: meaning that operation failed.

// Why we use Promises instead of callbacks : Promises helps to deal with asynchronous code in a far more simpler way that callbacks.


//how to create a promise

// const promiseResolved = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("get the Tacos");
//     }, 2000);
// })

// const promiseRejected = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("can not get the Tacos");
//     }, 2000);
// })
// promiseResolved.then(onFulfillment);
// function onFulfillment(result) {
//     console.log(result);
// }

// promiseRejected.catch(onRejected);
// function onRejected(result) {
//     console.log(result);
// }


// PromiseAll ---> if we have multiple promises and we we want to move further if all promises loaded then we use promise.all(promise1, promise2, promise3).then((value)=> console.log(value))
const promise1 = Promise.reject("rejected promise");
const promise2 = 43;
const promise3 = new Promise((resolve) => setTimeout(resolve('hi'), 5000));

Promise.all([promise1, promise2, promise3]).then((value) => console.log(value)).catch(value => console.log(value));// if any of the promises are rejected then return catch the rejection

