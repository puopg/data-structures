var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentSize = 0;
  var max = 0
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[max] = value;
    currentSize += 1;
    max += 1;
  };

  someInstance.dequeue = function(){
    var frontOfQueue = undefined;
    var keyToDequeue = head;
    if(someInstance[keyToDequeue] != undefined){
      frontOfQueue = someInstance[keyToDequeue];
      delete someInstance[keyToDequeue];
      currentSize -= 1;
      head += 1;
    }
    return frontOfQueue
  };

  someInstance.size = function(){
    return currentSize;
  };

  return someInstance;
};
