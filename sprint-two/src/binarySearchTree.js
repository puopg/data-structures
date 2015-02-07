var BinarySearchTree = function(value){
  var biNode = {};
  biNode.value = value;
  biNode.left = null;
  biNode.right = null;


  biNode.insert = function(value){
    if  (biNode.value > value) {
      if (biNode.left === null) {
        biNode.left = new BinarySearchTree(value);
      }
      else {
        biNode.left.insert(value);
      }
    }
    else {
      if (biNode.right === null) {
        biNode.right = new BinarySearchTree(value);
      }
      else {
        biNode.right.insert(value);
      }
    }
  }

  biNode.contains = function(value){

    if (biNode.value === value) {
      return true;
    } else {
      if (biNode.value > value){
        if (biNode.left === null){
          return false;
        } else {
          return biNode.left.contains(value);
        }
      } else {
        if (biNode.right === null) {
          return false;
        } else {
          return biNode.right.contains(value);

        }
      }
    }
  };

  biNode.depthFirstLog = function(func){
    func(biNode.value);

    if (biNode.left !== null)  {
      biNode.left.depthFirstLog(func);
    }
    if (biNode.right !== null) {
      biNode.right.depthFirstLog(func);
    }
  };

  return biNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
