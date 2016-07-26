var express = require('express');
var swig = require('swig');
swig.setDefaults({cache:false});
var app = express();
var path = require('path');
var Product = require('./pm.js');
var bodyParser = require('body-parser');
var mo = require('method-override');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('view engine','html');
app.set('views', __dirname + '/views');
app.engine('html',swig.renderFile);

app.use(bodyParser.urlencoded({extended:true}));

app.use(mo('_method'));

app.get('/', function (req,res,next){
	res.render('index' , {title: 'title'});	
	
})

app.get('/p', function(req,res,next){
	res.render('p', {title:'products', product: Product.getProduct()});
	//console.log (Product.getProduct());	

})

app.delete('/p/:id', function(req,res,next){

	//console.log(req.params);
	Product.delete(req.params.id*1);
	
	res.redirect('/p');
	
})


app.get('/p/:id', function(req,res,next){
	//console.log (req.params);
	Product.getid (req.params.id*1);
	Product.delete (req.params.id*1);
	res.render('edit',{title:'edit'});
	//res.redirect('/edit');
})


app.post('/p/:id', function (req, res, next){
	Product.edit(req.body.name);
	res.redirect('/p');	

})


app.get('/add', function(req,res,next){
	res.render('add', {title:'add product'});
	
	
})

app.post('/add', function(req,res,next){
	
	Product.add(req.body.name, req.body.id);
	res.redirect('/p');	
})

//var method

app.listen(3000);
