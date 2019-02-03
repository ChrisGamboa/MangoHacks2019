/* finalProps array is what we need to use to output in React
   0 index is title
   1 index is price ***IF UNDEFINED, SPECIFY FREE TRIAL***
   2 index is time required
   3 index is difficulty level
*/

const $ = require('cheerio');
const puppeteer = require('puppeteer');
const searchEntry = 'data'
const PASSEDURL = `https://www.skillshare.com/classes/Professional-Python-Web-Development-Using-Flask/2017588125?via=search-layout-grid`;
const url = `${PASSEDURL}`;
let listOfProps = [];
let finalProps = [];
let i = 1;

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $(`h1`, html).each(function() {
      finalProps[0] = ($(this).text());
      console.log(finalProps[0]);
    });
    $(`.summary`, html).each(function() {
      let tempTime = $(this).text().trim();
      finalProps[2] = tempTime;
    });
    $(`.active`, `.level`, html).each(function() {
        let tempLevel = $(this).text();
        finalProps[3] = tempLevel.trim();
    })
  })
  .then(function(html) {
    console.log("\ntitle: " + finalProps[0]);
    console.log("price: " + finalProps[1]);
    console.log("time: " + finalProps[2]);
    console.log("difficulty: " + finalProps[3]);
  })
  .catch(function(err) {
    //handle error
  });

