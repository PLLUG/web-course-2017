# JavaScript pt.1


### JavaScript implementations

- WebKit / v8
- SpiderMonkey / Mozilla
- nodejs
- Rhino
- Babel
- Typscript

### Features

- Dynamic (Duck typing)
- Intepretator

### Declarations 

```js

var x = 1;  // function scope 

let y = 2; // block scope

let blockVarX = 1;

{
  let blockVarY = 2;
}

console.log(blockVarY); // error varible y is not defined

var funcVarX = 1;

function() {
  var f = function() {
    var funcVarY = 1;
  };

  console.log("func var y", funcVarY); // error
}

```

### Constants

```js
const A = 1;
```

### Types

```js
let a = 1; // Number
let s = "Hello, world" // String
let d = new Date() // Date 

console.log(typeof d); // display object

let o = {}; // Object
let arr = []; // Array
```

### Strings

```js
let s = "hello, world";
let s1 = 'hello, world';

let ints = `Sum of 1 and 1 is: ${1+1}`; // interpolate string


let helloWorld = "hello, " + "world"; // Hello, world

"test".length; // 4

```

