//hello.js
var express = require('express');
var app = express();
var port = 3000;
app.get('/name/user:user_name', function(request, response){
    response.status(200);
    response.set('Content-type', 'text/html');
    response.end('<html><body>' + 
       '<h1>What gives ' + req.params.user_name + '</h1>' + 
    '</body></html>'
    );
});

app.get('*', function(request, response){
    response.end('NewBufferStream_k177');
});

app.listen(port, function(){
    console.log('the server done started, ' +
    ' hit http://localhost:%s', port);
});