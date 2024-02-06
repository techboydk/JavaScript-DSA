const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()} : New ${req.method} request : ${req.url}\n`
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end("Home page");
                break;
            case '/about': res.end("About page");
                break;
            case '/signup':
                if (req.method === "POST") {
                    //db query

                } else if (req.method === "GET") {
                    res.end("Signup page");
                }
                break;
            default: res.end("404 not found");
        }
    })
});

server.listen(3000, () => console.log("server listening"))


/// There is 5 Methods of http server
// 1. GET method : get response from server 
// 2. POST method : send data to server
// 3. PUT method : manipulate data to server
// 4. DELETE method : delete data from server
// 5. Patch method : patch data to server