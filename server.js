//require dependencies
const express = require('express'),
const app = express(),
const router = express.Router();
const port = process.env.PORT || 7000,


router.get('/', function (req, res, next) {
    res.send('API is Ready');
});

//add routes to express app
routes(app);

//start Express server on defined port
app.listen(port);

//log to console to let us know it's working
console.log('API server started on: ' + port);