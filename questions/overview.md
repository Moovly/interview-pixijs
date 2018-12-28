# JavaScript
## What is “closure” in javascript? Can you provide an example?
### Answer
A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to the variable in three scopes:
- Variable declared in his own scope
- Variable declared in parent function scope
- Variable declared in the global namespace

```javascript
var globalVar = "abc";

// Parent self invoking function
(function outerFunction (outerArg) { // begin of scope outerFunction
  // Variable declared in outerFunction function scope
  var outerFuncVar = 'x';
  // Closure self-invoking function
  (function innerFunction (innerArg) { // begin of scope innerFunction
    // variable declared in innerFunction function scope
    var innerFuncVar = "y";
    console.log(
      "outerArg = " + outerArg + "\n" +
      "outerFuncVar = " + outerFuncVar + "\n" +
      "innerArg = " + innerArg + "\n" +
      "innerFuncVar = " + innerFuncVar + "\n" +
      "globalVar = " + globalVar);
  // end of scope innerFunction
  })(5); // Pass 5 as parameter
// end of scope outerFunction
})(7); // Pass 7 as parameter
```

`innerFunction` is closure which is defined inside `outerFunction` and has access to all variable which is declared and defined in outerFunction scope. In addition to this function defined inside the function as closure has access to the variable which is declared in `global namespace`.

Output of above code would be:

```javascript
outerArg = 7
outerFuncVar = x
innerArg = 5
innerFuncVar = y
globalVar = abc
```

## Promises
```javascript
const p1 = Promise.resolve('First Promise');
const p2 = Promise.reject('Second Promise');

p2
  .then(r => { console.log('then:', r) })
  .catch(e => { console.log('catch:', e) });

p1.then(r => { console.log(r)});

console.log('statement')
```

Expected Output:
```
statement
First Promise
catch: Second Promise
```

## Variable declarations (fix the bug)
```javascript
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```

Expected Output:
```
The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3
```

Actual Output:
```
The index of this number is: 4
The index of this number is: 4
The index of this number is: 4
The index of this number is: 4
```

## Write a function that allows you to do this:
`multiply(5)(6);`

## Difference between `==` and `===`
### Answer
`==` performs implicit type conversion (converts values to their boolean equivalent).

## What advantages are there in using arrow functions?
- Scope safety: Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). An arrow function does not create its own this, the this value of the enclosing execution context is used.
- Compactness: Arrow functions are easier to read and write.
- Clarity: When almost everything is an arrow function, any regular function immediately sticks out for defining the scope. A developer can always look up the next-higher function statement to see what the thisObject is.


## Exceptions

### Why would you use the finally statement over simply putting it after the try catch block?

```javascript
try {
  throw new Error('error');
} catch (error) {
    Logger.writeLogToDatabase(error);
    console.log('c');
} finally {
    console.log('x);
}
```
Answer:
`finally` will execute, even if the `Logger.writeLogToDatabase` also throws an error.

### What would be the output of the following code:
```javascript
try {
  try {
    throw new Error('error');
  } catch (ex) {
    console.log('inner:', ex.message);
    throw error;
  } finally {
    console.log('finally');
  }
} catch(ex) {
  console.log('outer:', ex.message);
}
```
Answer:
```
inner: error
finally
outer: error
```


# React
## What are the differences between a class component and functional component?
Class components allows you to use additional features such as local state and lifecycle hooks. Also, to enable your component to have direct access to your store and thus holds state.

When your component just receives props and renders them to the page, this is a 'stateless component', for which a pure function can be used. These are also called dumb components or presentational components.

## What is the use of refs?
The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.

# PixiJS
- See github repo