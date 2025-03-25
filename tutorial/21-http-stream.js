var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    //const text = fs.readFileSync("./tutorial/content/big.txt", "utf8");
    //res.end(text);

    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
      //pipe is a method of readable streams
      //it is used to write the data from a readable stream to a writable stream
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5002);
