
var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : ' ',
        database : 'test'
    });
    res.locals.connect();
    next();
});

app.use('/', index);
app.use('/api/v1/users', users);