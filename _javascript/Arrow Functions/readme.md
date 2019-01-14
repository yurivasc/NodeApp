Returning Object Literals from Arrow Functions in JavaScript
June 9, 2015
Arrow functions are one of the great new features of ECMAScript 2015. They allow you to define functions using a concise syntax that doesn't require the function keyword.

Using the classical function expression syntax, you could define a function to square a given integer as follows:
```javascript
var square = function(n) {
  return n * n;
};
```

Using arrow function notation, on the other hand, it looks a little differently:

```javascript
let square = n => {
  return n * n;
};
```
Note that the arrow function expression easily fits in one line and is still readable. The body of the function contains a single return statement which returns a binary expression. Because we have a single return statement within the body, we can shorten the function expression even further and omit both the wrapping block statement and the return keyword:

```javascript
let square = n => n * n;
```
This way, the body of the function is a simple binary expression and the code is a lot shorter than before. Let's now try to return an object literal from a function instead of a primitive value.

Returning Object Literals from Arrow Functions
Let's assume we want the square function to return the square of the given number as a property of an object literal. This is how we'd traditionally define the function:

```javascript
var square = function(n) {
  return {
    square: n * n
  };
};
```


If you were to rewrite this function expression as an arrow function, you might be tempted to simply translate it just like we did in the previous example, like this:



```javascript
let square = n => {
  square: n * n;
};


```
When you call square, though, you'll notice the function doesn't work as intended. No matter which input value you pass, you'll get undefined as a return value. Why is that?

The issue with the arrow function is that the parser doesn't interpret the two braces as an object literal, but as a block statement. Within that block statement, the parser sees a label called square which belongs to the expression statement n * n. Since there's no return statement at all, the returned value is always undefined.

To be precise, the body of the function consists of a block statement whose statement list contains a single statement, a labeled statement. Its body is an expression statement holding the binary expression. There's no return statement.

What you need to do is force the parser to treat the object literal as an expression so that it's not treated as a block statement. The trick is to add parentheses around the entire body:

```javascript
let square = n => ({ square: n * n });
```


Once the parser encounters the opening parenthesis, it knows from the ECMAScript grammar that an expression must follow because block statements can't be parenthesized. Therefore, it parses an object literal (which is an expression) rather than a block statement (which is not).

And there you go! Parentheses do the trick.