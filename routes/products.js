var app = require('express').Router();
var Product = require('../product.model');
module.exports = app;

app.get('/', function(req,res,next){
	res.render('products', {title:'products', products: Product.getProducts()});
});

app.delete('/:id', function(req,res,next){
	Product.delete(req.params.id*1);
	res.redirect('/products');
});

app.put('/:id', function (req, res, next){
	Product.edit(req.params.id* 1, req.body.name);
	res.redirect('/products');	
});

app.get('/:id/edit', function(req,res,next){
	res.render('edit', {title:'edit product', product: Product.getProduct(req.params.id * 1)});
});

app.get('/add', function(req,res,next){
	res.render('add', {title:'add product'});
})

app.post('/add', function(req,res,next){
	
	Product.add(req.body.name, req.body.id);
	res.redirect('/p');	
})
