var product = [

{name: 'ball',
 id : 10,
},
{
	name: 'fish',
	id: 20,
	},

]

var temp = 0;

module.exports = {

getProduct: function (){
	return product;	
},

add: function(namek, idk){
	product.push({name:namek, id: idk*1});	
},

delete: function(id){
	var dead = this.getProduct().filter(function (item){ return item.id == id})[0];
	var ind = this.getProduct().indexOf(dead);
	this.getProduct().splice(ind, 1);	

},

getid: function(id){
temp = id;	
},

edit: function (name){
	product.push({name:name, id:temp});

}


}