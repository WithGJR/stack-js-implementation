function _StackItem(data, prev, next){
  this.data = data;
  this.prev = prev;
  this.next = next;
}

function Stack(size){
  this.maxSize = size;
  this.currentSize = 0;
  this.head = null;
  this.last = null;
}

Stack.prototype.push = function(data){
  if (this.head === null) {
    var newStackItem = new _StackItem(data, null, null);
    this.head = newStackItem;
    this.last = newStackItem;
    this.currentSize += 1;
  }else{
    var originalTopStackItem = this.head; 
    var newStackItem = new _StackItem(data, null, originalTopStackItem);
    originalTopStackItem.prev = newStackItem;
    this.head = newStackItem; 

    if (this.currentSize === this.maxSize) {
      this.last.prev.next = null;
      this.last = this.last.prev;  
    }else{
      this.currentSize += 1; 
    }
  }
};

Stack.prototype.pop = function(){
  var topStackItem = this.head;
  if (topStackItem === null) {
    return this.head; 
  }

  this.currentSize -= 1;
  if (topStackItem.next === null) {
    this.head = null;
    this.last = null;
    return topStackItem.data;
  }else{
    this.head = topStackItem.next;
    return topStackItem.data;
  }
};

module.exports = Stack;
