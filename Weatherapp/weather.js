var weather = require('./weatherapp.js');

weather(function(currentweather) {
    console.log(currentweather);
});