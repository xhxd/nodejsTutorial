const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  //res.write("Welcome to our home page");
  //res.end();
  else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
  }
});
//req is the request object i.e. what the user requests and res is the response object.

server.listen(5002);
//This will start the server on port 5002. You can access it on localhost:5000.
