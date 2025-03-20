const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise(
    //   "./content/second.txt",
    //   "utf8"
    // );
    // await writeFilePromise(
    //   "./content/result-mind-grenade.txt",
    //   `This is awsome: ${first} ${second}`
    // );

    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is awsome: ${first} ${second}`
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

console.log("Next Task");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         // reject puts the error for the .catch() part
//       } else {
//         resolve(data);
//         // resolve puts the data for the .then() part
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
