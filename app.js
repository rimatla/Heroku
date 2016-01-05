/**
 * Created by acoelho on 1/5/16.
 */

var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write('Let me see if Heroku wants to be my friend')
    response.end();
}).listen(process.env.PORT || 3000);

console.log('Running on port 3000');