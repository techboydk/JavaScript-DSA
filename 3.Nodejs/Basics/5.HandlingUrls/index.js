const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const myUrl = url.parse(req.url, true);
    console.log(myUrl)

    const log = `${Date.now()}: New Request at url : ${req.url} data: ${myUrl.query.username}\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            return res.end();
        } else {
            switch (myUrl.pathname) {
                case '/':
                    res.end("HomePage");
                    break
                case '/about':
                    const username = myUrl.query.username;
                    res.end("Hello, " + username);
                    break
                default:
                    res.end("404 Not Found");
            }
        }
    })
});

server.listen(3000, (err) => console.log("server listening on 3000"))
