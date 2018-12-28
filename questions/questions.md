# Programming Exercise: PixiJS

# JavaScript Questions

## What is “closure” in javascript? Can you provide an example?

## Promises

```javascript
const p1 = Promise.resolve("First Promise");
const p2 = Promise.reject("Second Promise");

p2
  .then(r => console.log("then:", r))
  .catch(e => console.log("catch:", e));

p1.then(r => {
  console.log(r);
});

console.log("statement");
```

Does the order change when we comment out the first then:

```javascript
const p1 = Promise.resolve("First Promise");
const p2 = Promise.reject("Second Promise");

p2
  //.then(r => { console.log('then:', r) })
  .catch(e => {
    console.log("catch:", e);
  });

p1.then(r => {
  console.log(r);
});

console.log("statement");
```

## Is something wrong with the following code?

```javascript
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log("The index of this number is: " + i);
  }, 3000);
}
```

## Write a function that allows you to do this:

`multiply(5)(6);`

## Difference between `==` and `===`

## What advantages are there in using arrow functions? Whats the difference with a regular function?

## Exceptions

### What would be the output of the following code:

```javascript
try {
  try {
    throw new Error("error");
  } catch (ex) {
    console.log("inner:", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.log("outer:", ex.message);
}
```

### Why would you use the finally statement over simply putting it after the try catch block?

```javascript
try {
  throw new Error('error');
} catch (error) {
    Logger.writeLogToDatabase(error);
    console.log('c');
} finally {
    console.log('x');
}
```

# React

## What are the differences between a class component and functional component?

## What is the use of refs?
