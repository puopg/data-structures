var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
    newQueue.numberOfItems = 0;
    newQueue.back = 0; // points to the back of the queue
    newQueue.front = 0; // points to the front (aka first to remove) in the queue
    return newQueue;
};

queueMethods = {};

queueMethods.enqueue = function(value){
    this[this.back] = value;
    this.back += 1;
    this.numberOfItems += 1;
}

queueMethods.dequeue = function(){
    var frontOfQueue = this[this.front];
    if(frontOfQueue != undefined){
        delete this[this.front];
        this.front += 1;
        this.numberOfItems -= 1;
    }
    return frontOfQueue;
}

queueMethods.size = function(){
    return this.numberOfItems;
}


