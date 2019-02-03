/* finalProps array is what we need to use to output in React
   0 index is title
   1 index is price
   2 index is time required
   3 index is difficulty level
*/

const $ = require('cheerio');
const puppeteer = require('puppeteer');
const searchEntry = 'data'
const PASSEDURL = `https://www.edx.org/course/python-for-data-science-1`;
const url = `${PASSEDURL}`;
let listOfProps = [];
let finalProps = [];
let titleArray = [];
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
      titleArray = ($(this).text().split("\n"));
      finalProps[0] = titleArray;
    });
    $(`.stat-details`, html).each(function() {
      listOfProps.push($(this).text());
      finalProps[i] = listOfProps[listOfProps.length - 1];
      i += 1;
    });
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

