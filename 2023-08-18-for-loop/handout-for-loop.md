## For Loop

In JavaScript, a `for` loop is used to iterate over a block of code a specified number of times. It has three parts:

-   initialization,
-   condition and
-   increment/decrement.

```js
for (initialization; condition; increment / decrement) {
    // code to be executed
}
```

-   The `initialization` part is executed once at the beginning of the loop and is used to initialize the loop variable.
-   The `condition` part is evaluated at the beginning of each iteration. If it is true, the loop continues. If it is false, the loop ends.
-   The `increment/decrement` part is executed at the end of each iteration and is used to update the loop variable.

Here is an example of a for loop that iterates from 0 to 4:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

This will output:

```plain
0
1
2
3
4
```

In this example,

-   the loop variable `i` is `initialized` to `0`,
-   the `condition` is that `i` is less than `5` and
-   `i` is `incremented` by `1` at the end of each iteration.

To initialize a variable you can use:

-   `let i = 0`,
-   `let i = 5`,
-   etc.

As condition you can use:

-   `i < 5`,
-   `i <= 5`,
-   `i > 5`,
-   etc.

To increment or decrement a number you can use:

-   `i++` or
-   `i = i + 2`,
-   `i--` or
-   `i = i - 2`,
-   `i += 2`,
-   etc.
