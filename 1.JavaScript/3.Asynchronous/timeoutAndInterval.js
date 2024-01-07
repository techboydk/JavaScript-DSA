//setTimeout(function, duration, para1, para2, para3...) to execute something after the some duration
function greet(name) {
    console.log(`Hellow ${name}`);
}
// console.log("next greeting")

// setTimeout(greet, 5000, "Dipesh");
// // to clear the timeout use clearTimeout
// const setTimeoutId = setTimeout(greet, 3000, "Dipesh");
// clearTimeout(setTimeoutId); // nothing will log out because timer is cleared


//setInterval(function, duration, para1, para2, para3...) is called when we want to do something on regular intervals
//setInterval(greet, 2000, "Dipesh Yadav");

// to clear the timer of this interval use clearInterval(setIntervalId);
// const setIntervalId = setInterval(greet, 2000, "Dipesh");
// clearInterval(setIntervalId);// nothing will show because timer is cleared


//recursive timer
const timeoutId = setTimeout(function run() {
    console.log("Hello world!");
    const id = setTimeout(run, 1000)
    //clearTimeout(id);

}, 1000);
//clearTimeout(timeoutId);