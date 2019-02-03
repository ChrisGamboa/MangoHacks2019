// UDEMY HAS ANTI-AUTOMATION TOOL BLOCKING OUR ACCESS

const rp = require('request-promise');
const $ = require('cheerio');
const searchEntry = 'data'
const url = `https://www.udemy.com/courses/search/?src=ukw&q=${searchEntry}`;

rp(url)
  .then(function(html){
    //success!
    $(`[class="list-view-course-card--course-card-wrapper--TJ6ET"]`, html).each(function() {
        console.log($(this));
        console.log("Bitch this aint working");
    });
  })
  .catch(function(err){
    //handle error
    console.log(err);
  });