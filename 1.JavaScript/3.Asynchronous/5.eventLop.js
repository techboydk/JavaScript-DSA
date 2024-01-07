//synchronous code in js runtime envirnoments
console.log("first");
console.log("second");
console.log("third");

//asynchronous code in js runtime envirnoments

console.log("first");
setTimeout(() => {
    console.log("second");

}, 0);
console.log("third");
console.log("fourth");
