var request= require('request');
var url = 'http://ipinfo.io';

module.exports = function(callback){
request({
      url:url,
      json:true

}, function(error, respose, body){
 if(error){
    callback('');
 } else {
   callback('body' + body.name);
 }

});
}
