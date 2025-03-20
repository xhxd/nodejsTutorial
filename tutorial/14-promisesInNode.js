const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        // reject puts the error for the .catch() part
      } else {
        resolve(data);
        // resolve puts the data for the .then() part
      }
    });
  });
};

getText("./content/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
