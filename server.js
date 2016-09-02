/**
 * Created by acoelho on 1/5/16.
 */

var http = require('http');

    //set up server
    http.createServer(function(request, response){
        response.writeHead(200);
        response.write('Let\'s see if Heroku wants to be my friend');
        response.end();
    }).listen(process.env.PORT || 3000);

    console.log('Running on port 3000');