const puppeteer = require('puppeteer');
const mail = 'rodanib889@carsik.com';
const pass = 'abcdef';

const browserPromise = puppeteer.launch({ headless: false, defaultViewport: null });
let page;

function waitAndClick(selector){
    return new Promise(function(resolve, reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        })
    })
}

browserPromise.then(function (browserInstance) {
    console.log("Browser is opened");
    let pagePromise = browserInstance.newPage();
    return pagePromise;
}).then(function (pageInstance) {
    console.log("page is opened");
    page = pageInstance;
    let urlPromise = pageInstance.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function () {
    console.log("hackerrank is opened");
    return waitAndClick('ul.menu a');
}).then(function(){
    let waitPromise = page.waitForSelector('.fl-module-content.fl-node-content .fl-button');
    return waitPromise;
}).then(function(){
    let domClickPromise = page.evaluate(function(){
        let btns = document.querySelectorAll('.fl-module-content.fl-node-content .fl-button');
        btns[1].click();
        return;
    });
    return domClickPromise;
}).then(function(){
    let waitPromise = page.waitForSelector('#input-1');
    return waitPromise;
}).then(function(){
    let mailTypePromise = page.type('#input-1', mail, {delay: 50});
    return mailTypePromise;
}).then(function(){
    let passTypePromise = page.type('#input-2', pass, {delay: 50});
    return passTypePromise;
}).then(function(){
    let clickPromise = page.click('button[data-analytics="LoginPassword"]');
    console.log("login successful!");
    return clickPromise;
}).then(function(){
    return waitAndClick('[data-attr1="algorithms"]');
}).then(function(){
    return waitAndClick("[value='warmup']");
}).then(function(){
    let waitPromise = page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
    return waitPromise;
}).then(function(){
    let domClickPromise = page.evaluate(function(){
        let arr = [];
        let btns = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i = 0; i<btns.length; i++){
            arr.push(btns[i].href);
        }
        return arr;
    })
    return domClickPromise;
}).then(function(quesArr){
    console.log(quesArr);
})
