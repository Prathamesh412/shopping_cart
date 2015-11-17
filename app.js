//Card- template function


var cart = function(product){

    

};

totalPrice=0;

var product=function(desc,name,price){
   this.name = name;
   this.desc = desc;
   this.price = price;
    
    }
};



function addToCart(product)
{
    this.desc = ['nice','warm','cool','cold','hot'];
    this.names = ['Fruit','Juice','Spades','Clubs'];
    this.price = ['12','23','34','40','80'];
    
    
  var items = [];
    
     for(var j = 0; j< this.names.length;j++){
      var itemObject = new item(j+1, this.names[j], this.desc[j], this.price[j]);
      items.push(itemObject);
         
       console.log(itemObject + "has been added to Cart");

}

 function removeFromCart(index){
  
  itemObject.pop[index];
//  return  + "is removed from Cart";
}
