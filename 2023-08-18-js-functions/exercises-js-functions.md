# Exercises: Functions

Create the functions described below and run them with test calls.  
You can either use separate files per function or write all functions in one file.  
When testing the functions, make sure you comment out the previous function calls to not get confused.  
Example:

```js
function firstFunction() {
  // do something
}
function secondFunction() {
  // do something
}

// Test call(s) firstFunction

// const result=firstFunction();
// console.log(result)

// Test call(s) secondFunction

const result = secondFunction();
console.log(result);
```

1. Create a function `printWelcomeMessage` that logs out `"Welcome at Taktsoft Campus Talents"`
2. Create a function `createWelcomeMessage` that returns the above welcome message. What do you need to do to see the message?
3. Create a function `createPersonalMessage` that accepts a name as parameter and returns a welcome message in the following format:
   ```
   Hello John, welcome at Taktsoft Campus Talents
   ```
4. Create a functions that accepts a name as parameter that returns "Hello teacher" when called with "Ralf", "Thomas", "Ulrich" or "Sascha". When called with any other name it should return "Hello student".
5. Extend the above function: When called with no parameter, it should return "Hello stranger"
6. Create a function `createAgeAwareMessage` that accepts an object in the following form as parameter:
   ```js
    {
        firstName:"John",
        lastName:"Doe",
        age: 24
    }
   ```
   If the person passed to the function is younger than 18, return "Hi John!", otherwise return "Welcome, Mr./Mrs. Doe"
7. Extend the above function: Add a parameter `gender` to the expected parameter object. Return "Welcome Mrs. Doe" or "Welcome Mr. Doe" depending on the person's gender.
8. Create a function `calculateSum` that accepts two parameters. Return the sum of both parameters.
9. Create a function `calculateCircumference` that accepts the radius of a circle. Calculate the circumference of the circle and return it.
10. **_You will need loops for the following exercises_**  
    Create a function `calculateTotalPrice` that accepts an array in the following format as parameter:
    ```js
    [
        {
            productName: 'iPhone',
            price: 600,
        },
        {
            productName: 'Refrigerator'
            price: 400,
        }
        // and so on...
    ];
    ```
    Calculate and return the sum of all prices.
11. Extend the above function: Add a property `availableItems` that holds the number of items in stock. When calculating the sum, multiply the price of each product with the corresponding availability.
12. Extend the above function again: Instead of returning a number, return an object in the following form:
    ```js
    {
    numProducts: 5, // Number of different products in the array
    numItems: 34, // Number of all available items in stock
    totalPrice: 24700 // Total price of all available items
    }
    ```
