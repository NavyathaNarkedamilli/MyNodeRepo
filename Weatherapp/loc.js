var weather = require('./location.js');

weather(function(currentweather) {
    console.log(currentweather);
});