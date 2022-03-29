const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const bowlers = document.querySelectorAll('.table.bowler tbody tr');
        let highW = 0, wt = "";
        for(let i = 0; i<bowlers.length; i++){
            const td = bowlers[i].querySelectorAll('td');
            if(td.length>1){
                // console.log(td[0].textContent + "\t\t" + td[4].textContent);
                let name = td[0].textContent;
                let wickets = td[4].textContent;
            
            if(wickets>highW){
                highW = wickets;
                wt = name;
            }}
        }
        console.log("Highest Wicket Taker: " + wt);
        console.log("No of Wickets: " + highW);
    }
}