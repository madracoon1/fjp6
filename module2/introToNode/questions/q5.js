//move a file
let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname, "file1.txt");
let desPath = path.join(__dirname, "newdir", "file1.txt");

fs.copyFileSync(srcPath, desPath);
fs.unlinkSync(srcPath);