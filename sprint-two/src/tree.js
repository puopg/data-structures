
var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

// O(n) where n = # of nodes in tree
treeMethods.contains = function(target){
  var result = false;
  if(this.value === target){
    result = true;
  }
  else {
    for(var i = 0; i < this.children.length; i++){
      result = result || this.children[i].contains(target);
    }
  }

  return result;
};

treeMethods.removeFromParent = function(){
  // Get the index in the array of parent where the child is
  var index = -1;
  for(var i = 0; i < this.parent.children.length; i++){
    if(this.parent.children[i].value === this.value){
      index = i;
    }
  }
  // Set that pointer to the child to null
  this.parent.children[index] = null;
  // Point the child's parent to null
  this.parent = null;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
