

var Graph = function(){
  // List of all nodes
  this.nodes = [];
  // Edges object
  this.edges = {};
};
// O(1)
Graph.prototype.addNode = function(value){
  this.nodes.push(Node(value));
};

// O(n)
Graph.prototype.contains = function(value){
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === value){
      return true;
    }
  }
  return false;
};

// O(n)
Graph.prototype.removeNode = function(value){
  // remove from Edges obj
  var indexToRemove;
  for(var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i].value === value) {
        indexToRemove = i;
    }
    this.removeEdge(value, this.nodes[i].value);
  }
  // take out of node array
  this.nodes.splice(indexToRemove, 1);
};

// O(1)
Graph.prototype.hasEdge = function(fromNode, toNode){
  var edgeKey = createEdgeKey(fromNode, toNode);
  if(this.edges[edgeKey]){
    return true;
  }
  return false;
};

// O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  var edgeKey1 = createEdgeKey(fromNode, toNode);
  var edgeKey2 = createEdgeKey(toNode, fromNode);
  this.edges[edgeKey1] = true;
  this.edges[edgeKey2] = true;
};

// O(1)
Graph.prototype.removeEdge = function(fromNode, toNode){
  var edgeKey1 = createEdgeKey(fromNode, toNode);
  var edgeKey2 = createEdgeKey(toNode, fromNode);
  this.edges[edgeKey1] = false;
  this.edges[edgeKey2] = false;
};

// O(n) * O(function)
Graph.prototype.forEachNode = function(cb){
   for(var i = 0; i < this.nodes.length; i++){
    cb(this.nodes[i].value);
   }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var createEdgeKey = function(x, y){
  return x.toString() + y.toString();
};

var Node = function(value){
  var node = {};

  node.value = value;

  return node;
};

