# JavaScript Functions

## Prior Knowledge

- JS Basics
- JS Objects
- JS Conditions & Booleans

## Learning Goals

- Understand how to define and call JavaScript functions
- Understand the basic structure of a JS function
- Understand what a `return` value is and where it occurs

## Detailed Topics of the Lesson

### Introduction

What is a `JavaScript function`?

- A `block of code` that is designed to perform a specific task
- a `procedure` performing a specific task
- usually defined by a programmer in order to be **used multiple times** throughout a program
- purpose is to make it easier to write and maintain the code
- ...is reusable

A JavaScript function has the following basic syntax:

### Basic syntax

```js
function nameOfFunction() {
  // function body: code to be executed inside these curly braces
}
```

- The `function` keyword tells the JavaScript engine that the following block of code has its own scope

:bulb: a JavaScript engine prioritizes functions, which are declared with the function keyword - so no matter where you define them, they are known to the compiler when processing other procedural code.

- it is used to define a function, followed by the **name of the function** (always keep in mind to define **meaningful** names).
- The `function body` is the code that is going to be executed when _calling_ the function

- it is placed between a set of curly braces `{ }`

### Parameters / arguments

- Parameters are values which are put from "outside" into the function scope
- You can use them to make functions more `universal` / `flexible`
- Passed into the function in a set of parentheses
- can contain one or more parameters (also called `arguments`)
- are **optional** `pieces of information` that the function needs in order to perform its task.

```js
function nameOfFunction(parameter) {
  // code to be executed
}
```

- `call` or `invoke` like this:

```js
nameOfFunction(param1, param2, ...);

```

### Return statement

- The `return` keyword specifies the value given back / _returned_ when the function is called
- The `return` value can be any valid JavaScript data type:

  - `Number`
  - `String`
  - `Object`
  - `Boolean`
  - `Array`
  - `undefined`
  - `null`

- A return statement is an important part of a JavaScript function
  - it allows the function to pass a value back to the `caller`
  - can then be used by the caller in any way it needs to
  - e.g. store it in a variable, passing it to another function
- A function does not have to return a value, return value is then `undefined` (thus storing it anyway does not result in an error)

Simple examples of JavaScript functions

```js
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(2, 3); // result will be 5
```

```js
function logSomething() {
  console.log("Hey there");
}
const result = logSomething(); // result will be undefined
```

### Resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
