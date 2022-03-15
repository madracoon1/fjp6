// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
let path = require("path");

let unPath = "C:\\Users\\prabh\\Desktop\\fjp\\module2\\introToNode\\unorganised";
let newArr = [];

let conts = fs.readdirSync(unPath);

for(let i of conts){
    let filePath = path.join(unPath, i);
    newArr.push(path.extname(filePath));
}

console.log(newArr);