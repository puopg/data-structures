var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
    newStack.numberOfItems = 0;
    return newStack;
};


stackMethods = {};

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


