
var Tree = function(value){
  var newTree = {};
  newTree.value = value;

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
  this.children.push(Tree(value));
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
