var _products = [
{
  name: 'ball',
 id : 10,
},
{
	name: 'fish',
	id: 20,
	},

];


module.exports = {
  getProducts: function (){
    return _products;	
  },
  add: function(name){
    var max = this.getProducts().reduce(function(memo, product){
      if(product.id > memo)
        memo = product.id;
      return memo;
    
    }, 0);
    max++;
    this.getProducts().push({ name:name, id: max });	
  },
  getProduct: function(id){
    return this.getProducts().filter(function(product){
      return product.id === id;
    })[0];
  },
  delete: function(id){
    var idx = this.getProducts().indexOf(this.getProduct(id));
    this.getProducts().splice(idx, 1);	
  },
  edit: function (id, name){
    var product = this.getProduct(id);
    product.name = name;
  }
};
