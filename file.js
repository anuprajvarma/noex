const fs = require("fs");

// // syncronous
fs.writeFileSync("./text.txt", "hey there");
const r = fs.readFileSync("./text.txt", "utf-8");
console.log(r);
fs.appendFileSync("./text.txt", "how feel you r");
fs.unlinkSync("./hs.js");

// asyncronous
fs.writeFile("./text.txt", "hey there", (err) => {
  console.log(`${err} err`);
});
fs.appendFile("./text.txt", "how feel you r", (err) => {
  console.log(`${err} err`);
});
fs.readFile("./text.txt", "utf-8", (err, result) => {
  console.log(result);
});
fs.unlink("./hs.js", (err) => {
  console.log(`${err} err`);
});
