const [doc, word] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let cnt = 0;
let i = 0;

while (i <= doc.length - word.length) {
  if (doc.slice(i, i + word.length) === word) {
    cnt++;
    i += word.length;
  } else {
    i++;
  }
}

console.log(cnt);
