const { readFile, writeFile } = require("fs");

// promisification of one specific function
const readFilePromise = async (path, options) => {
  return new Promise((resolve, reject) => {
    readFile(path, options, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

// general promisification of any function
const promisify = (fun) => {
  return async (...args) => {
    return new Promise((resolve, reject) => {
      fun(...args, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      });
    });
  };
};

(async () => {
  try {
    const text = await readFilePromise("./data.txt", "utf-8");
    const readFilePromisified = promisify(readFile);
    const text2 = await readFilePromisified("./data.txt", "utf-8");
    console.log(text);
    console.log(text2);
  } catch (err) {
    console.log(err);
  }
})();
