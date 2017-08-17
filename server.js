var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var compression = require('compression')
var port = process.env.port || 3001;

app.use(express.static(path.join(__dirname+'/dist')));
//app.use(compression());
app.use(cors());

app.listen(port,function(){
    console.log('server is running on '+port);
})