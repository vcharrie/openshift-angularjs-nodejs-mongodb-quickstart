
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments

// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
// app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "localhost";
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.set('port', port);
app.set('ipaddr', ipaddr);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
// app.get('/users', user.list);

app.get('/tlists/tlists',   routes.tlists);
app.get('/tlists/:tlistId', routes.atlist);
app.post('/tlists',         routes.create);
app.del('/tlists/:tlistId', routes.dellist);

http.createServer(app).listen(app.get('port'), app.get('ipaddr'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
