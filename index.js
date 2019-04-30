var express = require('express');
var app = express();
var path = require('path');

// var particlesJS = require('particles.js');
var port = process.env.PORT || 8080; 
//adding https certificate
var fs = require('fs-extra');
var https = require('https'); 
var http = require('http');
var enforce = require('express-sslify');
app.use(enforce.HTTPS({ trustProtoHeader: true }));
require('dotenv').config()

var options = {
  ca: fs.readFileSync(path.join(__dirname, process.env.CA_PATH)),
  key: fs.readFileSync(path.join(__dirname, process.env.KEY)),
  cert: fs.readFileSync(path.join(__dirname, process.env.CERT_PATH))
};

app.use(express.static('public'));



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });
app.use("/",function(req,res){
  res.sendFile(path.join(__dirname + "/index.html"));
});


// app.use("/",function(req,res){
//   res.sendFile(path.join(__dirname + "/construction.html"));
// });

// https.createServer(options, app).listen(port, function(){
//   console.log("server  started at port "+port);
// });
// http.createServer(app).listen(port, function() {
//   console.log('Express server listening on port ' + port);
// });
// https.createServer(options, app).listen(port, function(){
//   console.log("server  started at port "+port);
// });
// http.createServer(app).listen(port, function() {
//   console.log('Express server listening on port ' + port);
// });

app.listen(port);
console.log("Server is up on port : "+port);
