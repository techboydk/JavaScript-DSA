const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("./log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("HomePage")
                break
            case '/login': res.end("LoginPage");
                break
            default: res.end("Invalid");
        }
    })
});

server.listen(3000, () => console.log("Server listening on 3000"))