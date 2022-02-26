var express = require('express');
var app = express();
/**
 * Cấu hình body-parser
 */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./app/routers/baecon.router')(app);

// const PORT = process.env.PORT || 3000;
app.listen(3000, function() {
    console.log("Server listening on Server 3000");
});