//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require('fs');
let path = require('path');

let og = path.join(__dirname, "..", "..", "..", "module1", "project", "index.html");
let newPath = path.join(__dirname, "..", "..", "html", "index.html");

fs.copyFileSync(og, newPath);





