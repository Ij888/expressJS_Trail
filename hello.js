//hello.js
var express = require('express');
var app = express();
var port = 3000;
app.get('*', function(request, response){
    response.end('BufferStream_k177'); 
});