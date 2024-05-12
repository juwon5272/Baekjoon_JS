let input = require("fs").readFileSync("./input.txt").toString().trim();
let alphabet = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];
alphabet.map((e) => (input = input.replaceAll(e, "A")));
console.log(input.length);
