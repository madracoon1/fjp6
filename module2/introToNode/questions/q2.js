// given an array arr=[audio,video,image,software,documents,applications,other]

let fs = require("fs");
let path = require("path");

//make folder for each element in the given array and inside each folder make 4 files of that type
let arr=["audio","video","image","software","documents","applications","other"];
let arr2 = ['ab', 'cd', 'ef', 'gh'];
let arr3 = ['.mp3', '.mp4', '.jpg', '.exe', '.pdf', '.apk', '.zip'];

let dirPath = path.join(__dirname, "Organised");

if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

for(let i =0; i<arr.length; i++){

    let mainPath = path.join(dirPath, arr[i]);
    if(!fs.existsSync(mainPath)){
        fs.mkdirSync(mainPath);
    }

    for(let j = 0; j<4; j++){
        let fileName = arr2[j]+arr3[i];
        let filePath = path.join(mainPath, fileName);
        fs.writeFileSync(filePath, "");
    }
}