var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
    newStack.numberOfItems = 0;
    extend(newStack, stackMethods);
    return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value){
    this[this.numberOfItems] = value;
    this.numberOfItems += 1;
};

stackMethods.pop = function(){
    var topOfStack = this[this.numberOfItems - 1];
    if(topOfStack != undefined){
        delete this[this.numberOfItems - 1];
        this.numberOfItems -= 1;
    }
    return topOfStack;
};

stackMethods.size = function(){
    return this.numberOfItems;
};


