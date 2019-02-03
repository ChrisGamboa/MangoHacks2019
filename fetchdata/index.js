const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

//Cheerio and Puppeteer

//edX
const $ = require('cheerio');
const puppeteer = require('puppeteer');
const searchEntry = 'machine'
// const url = `https://www.edx.org/course?search_query=${searchEntry}`;
const listoflinks = [];

//Lynda
const lyndaurl = `https://www.lynda.com/search?q=${searchEntry}`;
let linksList = []
let courseList = [];

app.use(cors());

app.get( '/:id', (req, res) => 

puppeteer
.launch()

.then(function(browser) {
  return browser.newPage();
})
.then(function(page) {
  return page.goto(`https://www.edx.org/course?search_query=${req.params.id}`).then(function() {
  return page.content();
  });
})
.then(function(html) {
  $('.course-link', html).each(function() {
      listoflinks.push($(this).attr('href'));
    });

})
.then(function(){
console.log(listoflinks)
listoflinks.length = 0;
})
.catch(function(err) {
  //handle error
}) );

app.get('/lynda/:id', (req, res) => {
  rp(lyndaurl)
  .then(function(html){
      $('a',`[class="card card-list-style search-result course"]`, html).each(function() {
          linksList.push($(this).attr('href'));
      });
      for(i=0; i < 10; i++){
          let aux = new Object()
          
          rp(linksList[i])
              .then(function(html){
                  aux.link = linksList[i]
                  aux.title = $('.default-title', html).text()
                  aux.time = $('.course-info-stat', html).text().trim()
                  aux.time = aux.time.substr(0,aux.time.indexOf('m')+1)
                  aux.difficulty = $('h6 > strong', html).text()
  
                  courseList.push(aux)
              })
              .catch(function(err){
                  console.log("error")
              });
      } 
  })
  .catch(function(err){
      console.log("error")
  });

  // res.send("Someting")

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));