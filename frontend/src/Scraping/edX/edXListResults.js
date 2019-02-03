//const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const searchEntry = 'machine'
const url = `https://www.edx.org/course?search_query=${searchEntry}`;
const listoflinks = [];


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
    $('.course-link', html).each(function() {
        // console.log($(this).attr('href'));
        listoflinks.push($(this).attr('href'));
      });
  })
  .then(function(){
    for(links in listoflinks){
      console.log(listoflinks[links]);
    }
  })
  .catch(function(err) {
    //handle error
  });

  // for(links in listoflinks){
  //   console.log(links.text);
  // }