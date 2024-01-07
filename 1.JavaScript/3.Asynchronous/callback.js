//any function that passes as an argument to another function is called a callback function in JavaScript
// function that accepts a function as an argument or return a function is called higher order functions

function callback(name) {
    console.log(`Hellow ${name}`)
}
function HigherOrderFunction(callback) {
    const name = "Dipesh";
    callback(name);
}

HigherOrderFunction(callback);


//Note: Interviews point of view;
//1. Callback functions are the function that passed as argument to other functions
//2. they can be synchronous or asynchronous, if called immediately then it is synchronous else if called after sometime or after some event occurs or after some data fetched.
//3. callback hell make the code difficult to reason about
//4. alternative and recommended of callbacks is use to Promises.
