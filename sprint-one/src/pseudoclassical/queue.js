var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.numberOfItems = 0;
    this.back = 0; // points to the back of the queue
    this.front = 0; // points to the front (aka first to remove) in the queue
};

Queue.prototype.enqueue = function(value){
    this[this.back] = value;
    this.back += 1;
    this.numberOfItems += 1;
}

Queue.prototype.dequeue = function(){
    var frontOfQueue = this[this.front];
    if(frontOfQueue != undefined){
        delete this[this.front];
        this.front += 1;
        this.numberOfItems -= 1;
    }
    return frontOfQueue;
}

Queue.prototype.size = function(){
    return this.numberOfItems;
}


