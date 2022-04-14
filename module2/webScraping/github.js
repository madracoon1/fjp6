const jsdom = require('jsdom');
const request = require('request');
const {JSDOM} = jsdom;

const link = "https://github.com/topics";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const topics = document.querySelectorAll('.no-underline.d-flex.flex-column.flex-justify-center');
        for(let i = 0; i<topics.length; i++){
            let completeLink = "https://github.com" + topics[i].href;
            request(completeLink, cb2);
        }
    }
}

function cb2(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const titles = document.querySelectorAll('.f3.color-fg-muted.text-normal.lh-condensed a:nth-child(2)');
        for(let i = 0; i<8; i++){
            let completeLink = "https://github.com" + titles[i].href + "/issues";
            request(completeLink, cb3);
        }
    } 
}

function cb3(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const title = document.querySelector('.mr-2.flex-self-stretch a');
        const issues = document.querySelectorAll('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');

        for(let i = 0; i<issues.length; i++){
            console.log(title.textContent + ": " + issues[i].textContent);
        }
    }
}