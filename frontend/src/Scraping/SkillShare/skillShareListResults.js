//const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const searchEntry = 'data'
const url = `https://www.skillshare.com/search?query=${searchEntry}`;


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
    $('a', `[class="ss-card__title"]`, html).each(function() {
        console.log($(this).attr('href'));
      });
  })
  .catch(function(err) {
    //handle error
  });