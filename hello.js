//hello.js
var express = require('express');
var app = express();
var port = 3000;
app.get('*', function(request, response){
    response.end('BufferStream_k177'); 
});

app.listen(port, function(){
    console.log('the server done started, hit http://localhost:3000 on yer brwser')
})