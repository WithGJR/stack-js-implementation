# Stack - Javascript Implementation

It's a stack data structure implemented in Javascript.

## API

### initialize the stack

When you initialize the stack, you need to specify the size you want to the constructor function.

``` javascript
var Stack = require('stack-js-implementation');
var stack = new Stack(3); // Specify the size of this stack equals to 3
```

### pop

Pop the top-most element of the stack. If there are no more element available, this method will return `null`.

``` javascript
stack.pop();
```

### push

Push a new element to the top-most position of the stack. If the stack has reached the max size, then this method will remove the bottom-most element and push this new element to the top-most position.

``` javascript
stack.push(3);
stack.push({title: "hello"});

stack.pop(); // return {title: "hello"}
stack.pop(); // return 3
stack.pop(); // return null
```
