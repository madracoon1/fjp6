const puppeteer = require('puppeteer');
const mail = "gavic76183@carsik.com";
const pass = "abcdef";
const code = require('./code');

async function waitAndClick(selector, page){
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function questionSolver(question, answer, page){
    await page.goto(question);
    await waitAndClick('.checkBoxWrapper input', page);
    await waitAndClick('.ui-tooltip-wrapper textarea', page);
    await page.type('.ui-tooltip-wrapper textarea', answer);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('X');
    await page.keyboard.up('Control');
    await waitAndClick('.monaco-editor.no-user-select.vs', page);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');
    await waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
}

(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null });
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/');
    await waitAndClick('ul.menu a', page);
    await page.waitForSelector('.fl-module-content.fl-node-content .fl-button');
    await page.evaluate(function () {
        let btns = document.querySelectorAll('.fl-module-content.fl-node-content .fl-button');
        btns[1].click();
        return;
    });
    await page.waitForSelector('#input-1');
    await page.type('#input-1', mail, { delay: 50 });
    await page.type('#input-2', pass, { delay: 50 });
    await page.click('button[data-analytics="LoginPassword"]');
    await waitAndClick('[data-attr1="algorithms"]', page);
    await waitAndClick("[value='warmup']", page);
    await page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
    let questionsArr = await page.evaluate(function () {
        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for (let i = 0; i < aTags.length; i++) {
            let link = aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    for (let i = 0; i < questionsArr.length; i++) {
        await questionSolver(questionsArr[i], code.answers[i], page);
    }
})();