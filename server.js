var express = require('express');
var swig = require('swig');
swig.setDefaults({cache:false});
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('view engine','html');
app.set('views', __dirname + '/views');
app.engine('html',swig.renderFile);

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.get('/', function (req, res, next){
	res.render('index' , {title: 'title'});	
	
});

app.use('/products', require('./routes/products'));


//var method

app.listen(process.env.PORT, function(){
  console.log('listening on ' + process.env.PORT);
});
