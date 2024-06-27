const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log("Hello World!")

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color:red"> Hello World </h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
// });
// server.listen(port, hostname, () => {
//      console.log(`Server running at http://${hostname}:${port}/`);
// });



const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color:red"> Hello World </h1>');
            res.write('<p>I wonder what else we can send...</p>');
            res.end();
            break;
        case '/about':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>About Us</h1>');
            res.write('<p>Welcome to our about page.</p>');
            res.end();
            break;
        case '/contact':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>Contact Us</h1>');
            res.write('<p>Feel free to reach out to us.</p>');
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>404 Not Found</h1>');
            res.write('<p>The page you are looking for does not exist.</p>');
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
