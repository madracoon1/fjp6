//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path");

if(!fs.existsSync("newdir")){
    fs.mkdirSync("newdir");
}

let newPath = path.join(__dirname, "newdir", "hey.txt");

fs.writeFileSync(newPath, "new file has been made");
