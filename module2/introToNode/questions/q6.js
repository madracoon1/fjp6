//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let unPath = path.join(__dirname, "..", "unorganised");

let arr = fs.readdirSync(unPath);

for(let i of arr){
    let filePath = path.join(unPath, i);
    let ext = path.extname(filePath);

    if(ext == '.jpg'){
        console.log("image file");
    }
    else if(ext == '.mp4'){
        console.log("video file");
    }
    else if(ext == '.mp3'){
        console.log("audio file");
    }
    else if(ext == '.zip'){
        console.log("zip file");
    }
    else if(ext == '.xlsx'){
        console.log("excel file");
    }
    else if(ext == '.doc'){
        console.log("word file");
    }
    else if(ext == '.pdf'){
        console.log("pdf file");
    }
}