//Card- template function
var cart = function(name, desc, price){
//  this.name = name;
//  this.desc = desc;
//  this.price = price;
    
totalItems=items.length+1;
    
for(var i = 0; i< this.names.length;i++){
        if (i=0){
            price=price[1]
        }
         else{
      price = price[i] + price [i + 1];
         }
    }
    
};

var product=function(){
    this.desc = ['nice','warm','cool','cold','hot'];
    this.names = ['Fruit','Juice','Spades','Clubs'];
    this.price = ['12','23','34','40','80'];
    var items = [];
    
     for(var j = 0; j< this.names.length;j++){
      var itemObject = new item(j+1, this.names[j], this.desc[j], this.price[j]);
      items.push(itemObject);
    }
};

var myDeck = new product();

    div = document.createElement('div');
    div.className = 'card';
    div.innerHTML ='<span class="number">'+ myDeck[i].name +'</span><span class="suit"></span>';
    document.body.appendChild(div);