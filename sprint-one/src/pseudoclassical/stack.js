var Stack = function() {
    this.numberOfItems = 0;
};

Stack.prototype.push = function(value){
    this[this.numberOfItems] = value;
    this.numberOfItems += 1;
};

Stack.prototype.pop = function(){
    var topOfStack = this[this.numberOfItems - 1];
    if(topOfStack != undefined){
        delete this[this.numberOfItems - 1];
        this.numberOfItems -= 1;
    }
    return topOfStack;
};

Stack.prototype.size = function(){
    return this.numberOfItems;
};


