var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var _PORT = process.env.PORT || 3002;

app.use(router);
app.use(express.static(__dirname + '/'));

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/knotty-lock-test.html');
});

router.get('/ajax', function(req, res) {
    setTimeout(makeMeWait(res), 2000);
});

// Sends a Successful result once the request has waited 2 seconds
function makeMeWait(res){
    res.sendStatus(200);
}

server.listen(_PORT, function() {
    console.log('Server listening at port %d', _PORT);
});