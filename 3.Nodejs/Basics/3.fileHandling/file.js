const fs = require('fs');


// Write file
// //synchronously (blocking)
// fs.writeFileSync("./test.txt", "Hellow world!");

// //Async (Non blocking)
// fs.writeFile("./test.txt", "hello world asynchronous ", (err) => { });

//Read files

// //sync reading
// const results = fs.readFileSync("./contact.txt", "utf8");
// console.log(results);

//async reading (doesn't return anything)
// fs.readFileSync("./contact.txt", "utf8", (err, results) => {
//     if (err) {
//         console
//     }
//     else {
//         console.log(results)
//     }
// })

//Append file

// fs.appendFileSync("./test.txt", `${Date.now()} Hey there \n`);
