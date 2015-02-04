var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value){
    someInstance[size] = value;
    size += 1;
  };

  someInstance.pop = function(){
    var topOfStack = undefined;
    if(someInstance[size-1] != undefined){
      topOfStack = someInstance[size -1];
      delete someInstance[size-1];
      size -= 1;
    }
    return topOfStack;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
