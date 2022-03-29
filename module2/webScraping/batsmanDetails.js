const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const batsmen = document.querySelectorAll('.table.batsman a');
        for(let i = 0; i<batsmen.length; i++){
            // console.log(batsmen[i].textContent);
            let batSlash = batsmen[i].href;
            let completeLink = "https://www.espncricinfo.com" + batSlash;
            request(completeLink, bat);
        }
    }
}

function bat(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let details = document.querySelectorAll('.player_overview-grid div h5');
        console.log("Full Name: " + details[0].textContent + "\t" + "DOB & Place of Birth: " + details[1].textContent + "\n");
    }
}