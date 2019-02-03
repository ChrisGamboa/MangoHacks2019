const rp = require('request-promise');
const $ = require('cheerio');
//const searchEntry = 'data'
const url = 'https://www.lynda.com/search?q=python';

let linksList = []
const courseList = [];

rp(url)
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

   

       
    