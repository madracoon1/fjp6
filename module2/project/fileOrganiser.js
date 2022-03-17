let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];

let extensions = {
    Audio: ['.mp3'],
    Video: ['.mp4', '.mkv'],
    Document: ['.xlsx', '.zip', '.doc', '.pdf'],
    Image: ['.png', '.jpeg', '.jpg', '.gif'],
    Software: ['.exe']
}

if(fs.existsSync(folderPath)){
    let files = fs.readdirSync(folderPath);
    for(let i = 0; i<files.length; i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log(ext +" "+ nameOfFolder);
        let pathOfFolder = path.join(folderPath, nameOfFolder);
        if(fs.existsSync(pathOfFolder)){
            moveFile(pathOfFolder, folderPath, files[i]);
        }
        else{
            fs.mkdirSync(pathOfFolder);
            moveFile(pathOfFolder, folderPath, files[i]);
        }
    }
}
else{
    console.log("Enter a valid path");
}

function giveFolderName(ext) {
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i = 0; i<extArr.length; i++){
            if(ext == extArr[i]){
                return key;
            }
        }
    }
    return 'Others';
}

function moveFile(pathOfFolder, folderPath, fileName){
    let srcPath = path.join(folderPath, fileName);
    let desPath = path.join(pathOfFolder, fileName);
    fs.copyFileSync(srcPath, desPath);
    fs.unlinkSync(srcPath);
}