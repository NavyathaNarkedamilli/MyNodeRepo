var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1bdb0e024c50b9a5e0d9bb70bb7f8e84';
module.exports = function(callback) {  
request({
    url:url,
    json:true
}, function name(errormessage,response,body) { 
    if(Error){

        console.log('unable to fetch weather data');
    }
    else
    {
       callback('It\'s ' + body.main.temp+' in '+ body.name + '!');
    }
});}