var request = require('request');
var url = 'http://ipinfo.io';
module.exports = function(callback) {  
request({
    url:url,
    json:true
}, function name(errormessage,response,body) { 
    if(Error){
        callback();
    }
    else
    {
       callback(body);
    }
});
};