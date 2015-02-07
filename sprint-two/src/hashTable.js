

var HashTable = function(size){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++)
    this._storage.set(i,LinkedListForHash());

};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // Check if we need to resize
  if(this.extendCapacity()){
    // Create a new HashTable with double the size
    var oldStorage = this._storage;
    this._limit = this._limit*2;
    this._storage = LimitedArray(this._limit);

    for (var i = 0; i < this._limit; i++)
      this._storage.set(i,LinkedListForHash());

    var hi = oldStorage.get(4);
    // Call the helper's each method and for each linkedlist,
    // pass in a function to extract the key and value
    oldStorage.each(function(list){
      var tempNode = list.head;
      while(tempNode !== null){
        this._storage.insert(tempNode.key, tempNode.value);
      }
    });
  }

  // Retrieve the current linked list
    var list = this._storage.get(i);
  // Append to the retrieved list the new node
    list.addToTail(k,v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i).getVal(k);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).removeNode(k);
}

HashTable.prototype.extendCapacity = function(){
    var slotsUsed = 0;
    for (var i = 0; i < this._limit; i++){
      if(this._storage.get(i).head !== null){
        slotsUsed++;
      }
    }
    if(slotsUsed >= (0.25 * this._limit))
      return true;

    return false;
}
//==========================================

var LinkedListForHash = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(key, value){
    var node = NodeHash(key, value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    }
    else{
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var retVal = list.head.value;
    if(list.head != list.tail){
      // Move head to the next node
      list.head = list.head.next;
    }
    else{
      delete list.head;
      list.head = null;
      list.tail = null;
    }
    return retVal;
  };

  list.getVal = function(key){
    var result = null;
    var tempNode = list.head;
    while(tempNode != null){
      if(tempNode.key === key){
        result = tempNode.value;
      }
      tempNode = tempNode.next;
    }
    return result;
  };

  list.removeNode = function(key){
    // Find the node with key
    var tempNode = list.head;
    var newKey, newVal;
    while(tempNode != null){
      // If we found the key
      if(tempNode.key === key){
        // Check if node is not at the end, set all values to the next's
        if(tempNode.next !== null){
          tempNode.key = tempNode.next.key;
          tempNode.value = tempNode.next.value;
          tempNode.next = tempNode.next.next;
          return;
        }
        // If at the end, set all values to null
        else{
          tempNode.key = null;
          tempNode.value = null;
          tempNode.next = null;
          return;
        }
      }
      tempNode = tempNode.next;
    }
  }
  return list;
};

/// NodeHash
/// This object contains:
/// key: A key associated with a value
/// value: The value associated with the key
/// next: A pointer to the next NodeHash object
var NodeHash = function(key, value){
  var node = {};

  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
