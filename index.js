function Stack(size) {
  this._maxSize = size;
  this._currentSize = 0;
  this._items = [];
}
Stack.prototype.push = function(data) {
  if (this._currentSize === this._maxSize) {
    this._items.shift();
  }
  this._items.push(data)
};
Stack.prototype.pop = function(data){
  return this._items.pop();
}

module.exports = Stack;