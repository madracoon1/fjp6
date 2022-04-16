const puppeteer = require('puppeteer');

const browserPromise = puppeteer.launch({headless: false});

browserPromise.then(function (browserInstance) {
    console.log("Browser is opened");
    let pagePromise = browserInstance.newPage();
    return pagePromise;
}).then(function (page){
    console.log("page is opened");
    let urlPromise = page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("google is opened");
})
