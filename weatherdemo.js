var request= require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=06dcedd27a2472844713697246c02cd0';

module.exports = function(callback){
request({
      url:url,
      json:true

}, function(error, respose, body){
 if(error){
    callback('unable to fetch weather');
 } else {
   callback('It\'s' + body.main.temp + 'in' + body.name);
 }

});
}
